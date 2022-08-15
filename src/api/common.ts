/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { ILoginInfo } from './types/common'

// interface ResponseData<T = any>{
//     status:number,
//     msg:string,
//     data: T
// }
export const getLoginInfo = () => {
    // return request({
    //  method: 'GET',
    //  url: '/wechat/qrcode'
    // })
//   return request.get<{
//     status: string,
//     data: {
//       expire_seconds:number,
//       qrCode:number,
//      sceneId:string
//     },
//     a: string
//   }>('/wechat/qrcode')
//   return request.get<ResponseData<{
//     expire_seconds:number,
//     qrCode:number,
//     sceneId:string
//   }>>('/wechat/qrcode')
    return request<ILoginInfo>({
        method: 'GET',
        url: '/wechat/qrcode'
    })
}
