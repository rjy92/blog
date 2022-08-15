export const isExternal = (path: string) => {
    return /^(https?:|mailto:|tel:)/.test(path)
}
export const validUsername = (str: string) => {
    return validEmail(str) || validPhone(str)
}
// 验证密码
export const validPassword = (str: string) => {
    const reg = /^[A-Za-z\d\!@#$%.<>?&*()]+$/
    return (reg.test(str) && str.length > 7 && str.length < 33)
}
// 验证email
export const validEmail = (str: string) => {
    const reg = /(^([a-z0-9A-Z]+[-_|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$)/
    return reg.test(str)
}
// 验证手机号
export const validPhone = (str: string) => {
    const reg = /^(1[3-9])\d{9}$/
    return reg.test(str)
}

export const validateURL = (url: string) => {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(url)
}
