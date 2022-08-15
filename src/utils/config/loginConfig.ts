const cdn = 'http://v8.51cto.com' + '/athena-resources'
interface LoginBanner {
    img: string,
    linkUrl: string
}
interface LoginConfig {
    leftTopLogo: string,
    leftTopLogoHeight: string,
    loginBanner: LoginBanner[]
}
const loginConfig: LoginConfig = {
    leftTopLogo: `${cdn}/common/51logo-correct.png?${Date.now()}`,
    leftTopLogoHeight: '22px',
    loginBanner: [
        {
            img: `${cdn}/common/loginbg_2.jpg?${Date.now()}`,
            linkUrl: ''
        }
    ]
}
export default loginConfig
