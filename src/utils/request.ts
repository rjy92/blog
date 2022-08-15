import axios, { AxiosRequestConfig } from 'axios'
import router from '@/router/'
const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
request.interceptors.request.use(
    config => {
    // 统一设置用户身份 Token
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        router.push({
            path: 'login'
        })

        const status = response.data.status

        // 正确的情况
        if (!status || status === 200) {
            return response
        }

        // 统一处理响应错误，例如 token 无效、服务端异常等
    },
    err => {
        return Promise.reject(err)
    }
)

// export default request
export default <T = any>(config: AxiosRequestConfig) => {
    return request(config).then(res => {
        return (res.data) as T
    })
}
