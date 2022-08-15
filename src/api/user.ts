
import request from '@/utils/request'
// import { ILoginPassInfo } from './types/user'
export const login = (data: object) => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}
// 账户信息-获取当前用户信息
export function getInfo () {
    return request({
        url: '/user/users/current?s=0',
        method: 'get'
    })
}
export function logout () {
    return request({
        url: '/logout',
        method: 'post'
    })
}
// 当前用户登录次数
export function getLoginCount () {
    return request({
        url: '/report/login/count',
        method: 'get'
    })
}
