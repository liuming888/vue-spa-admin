/**
 * @param  {string} name  要检查的cookie项的key
 * @return true 有   false 无
 */
export function getCookie(name) {
    if (document.cookie.length > 0) {
        let result = document.cookie.indexOf(name + '=');
        if (result != -1) {
            return true;
        }
    }
    return false;
}

// 删除这项cookie
/**
 *
 * @param {string} name   要删除的cookie项的key
 */
export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var result = getCookie(name);
    if (result) {
        document.cookie = name + '=' + ';expires=' + exp.toGMTString();
    }
}

/**
 *
 * @param {string} inputTime   时间字符串
 * @return {string} 转换后的时间字符串
 */
export function formatDateTime(inputTime) {
    var date = new Date(inputTime);
    // var y = date.getFullYear();
    // var m = date.getMonth() + 1;
    // m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return /* y + '.' + m + '.' + d + ' ' + */ h + ':' + minute + ':' + second;
}

/**
 *
 * @param {number | string} inputTime   时间字符串或时间戳
 * @return {string} 格式化后的时间字符串
 */
export function formatTimeDemonstration(timerStr) {
    var date = new Date(timerStr);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    return `${d}/${m}/${y}`;
}

/**
 * @msg: js输入金额自动格式化
 * @param {number | string} coin 金额
 * @return: 格式化后的金额，三位逗号隔开(不包含小数)
 */
export function formatMoney(coin) {
    var s = '' + coin;
    if (/[^0-9\.]/.test(s)) return 'invalid value';
    s = s.replace(/^(\d*)$/, '$1.');
    s = s.replace(/(\d*\.\d\d)\d*/, '$1');
    s = s.replace('.', ',');
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) s = s.replace(re, '$1,$2');
    var result = s.replace(/^\./, '0.');
    return result.substring('0', result.length - 1);
}
