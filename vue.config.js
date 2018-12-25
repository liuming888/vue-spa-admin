module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                assets: '@/assets',
                components: '@/components',
                views: '@/views',
            },
        },
    },
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                // 测试环境
                // target: 'http://119.23.230.72:8088/',

                // 权
                target: 'http://192.168.4.142:8091/',

                // 开发服务器
                // target: 'http://dev-xhz-backend.batmobi.net/',

                ws: true,

                changeOrigin: true,

                pathRewrite: {
                    '^/api': '/', // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                },
            },
        },
    },
};
