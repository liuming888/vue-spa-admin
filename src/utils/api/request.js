import Vue from 'vue';
import axios from 'axios';
// import qs from 'qs';
import config from './config';
// import md5 from 'md5';

var instance = axios.create();

let url = config[process.env.NODE_ENV].url;
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
instance.defaults.baseURL = url;
instance.defaults.timeout = 6000;
instance.defaults.withCredentials = true;

Vue.prototype.$loaddingNum = 0;

// 请求拦截
instance.interceptors.request.use(
    config => {
        Vue.prototype.$loaddingNum++;
        Vue.prototype.$indicator.open();
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
  *      响应拦截  (根据实际更改)
  * 状态码说明
  * 0: 成功
  * -1: 失败
  * 1: 参数错误
  * 2: 数据库错误
  * 3: 未登录
  * 4: 用户不存在
  * 5: 无权限访问
  * 500: 内部服务器错误
  * 6: 没有此纪录
  */
instance.interceptors.response.use(
    response => {
        Vue.prototype.$loaddingNum--;
        if (Vue.prototype.$loaddingNum <= 0) {
            Vue.prototype.$indicator.close();
        }
        try {
            if (response.data.code == 0) {
                return response.data;
            } else {
                throw response.data;
            }
        } catch (error) {
            if (error.code) {
                Vue.prototype.$toast(error.msg);
                if (error.code=='-1'){  
                    return error.code;
                }
            } else {
                Vue.prototype.$toast('The request failed. Please try again later!');
            }
            console.error(error);
            return false;
        }
    },
    error => {
        Vue.prototype.$loaddingNum--;
        if (Vue.prototype.$loaddingNum <= 0) {
            Vue.prototype.$indicator.close();
        }

        return Promise.reject(error);
    }
);

const $request = {
    // url,
    post({ url, data = {}, config = {} }) {
        let dat = data;
        // if (!config.headers) {
        //     config.headers = {
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //     };
        //     dat = qs.stringify(data);
        // }
        return instance({ method: 'post', url, data: dat, ...config })
            .then(response => {
                return response;
            })
            .catch(error => {
                console.error(error, 'error');
                return false;
            })
            .finally(() => {});
    },
    get(params = {}) {
        return instance.get(params.url, { params: params.data }).then(response => {
            return response;
        });
    },
    /**
     *   instance 的原始默认用法。详情谷歌看instance
     * @param {object} instance(config)的config
     */
    request(parame = {}) {
        let { method = 'get', url, data = {}, params = {}, config = {} } = parame;

        method = method.toLowerCase();
        // if (method !== 'get' && !config.headers) {
        //     data = qs.stringify(data);
        // }
        return instance({ method: method, url: url, data, params, ...config })
            .then(response => {
                return response;
            })
            .catch(error => {
                console.error(error, 'error');
                return false;
            });
    },
};
export default $request;
