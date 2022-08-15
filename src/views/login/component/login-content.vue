<template>
    <div class="box" v-if="normalLoginTab">
        <div class="login-tab clear">
            <div
                @click="toggleTab(1)"
                :class="`item float-left ${loginType === 1 ? 'active' : ''}`"
            >
                账号密码登录
            </div>
            <div
                @click="toggleTab(2)"
                :class="`item float-right ${loginType === 2 ? 'active' : ''}`"
            >
                验证码登录
            </div>
        </div>
        <LoginPassword
            v-show="loginType === 1"
            :loading="loading"
            @onlogin="onLogin"
        />
        <LoginPhone
            v-show="loginType !== 1"
            :loading="loading"
            @onlogin="onLogin"
        />
    </div>
    <div class="new-loginFunc">
        <div
            class="loginFuncNormal"
            v-if="normalLoginTab"
            @click="changeLoginFunc"
        ></div>
        <div class="loginFuncApp" v-else @click="changeLoginFunc"></div>
        <span
            :class="`ico-login-switch-tips ${
                normalLoginTab ? 'normal' : 'app'
            }`"
            @click="changeLoginFunc"
        >
            <span>{{ normalLoginTab ? "扫码登录" : "账号/验证码登录" }}</span>
        </span>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import LoginPassword from './login-password.vue'
import LoginPhone from './login-phone.vue'
import { useRoute } from 'vue-router'
import { store } from '@/store'
const route = useRoute()
const loading = ref(false)
const loginType = ref(1)
const normalLoginTab = ref(false)
const token = ref('')
const toggleTab = (index: number) => {
    if (loginType.value !== index) {
        loginType.value = index
    }
}
const onLogin = (formData: any) => {
    const ajaxData = { ...formData }
    const { channel, uid } = route.query
    if (channel !== undefined && uid !== undefined) {
        ajaxData.channel = channel
        ajaxData.uid = uid
    }
    loading.value = false

    const type = loginType.value === 1 ? 'password' : 'sms'
    console.log('onLoginonLoginonLoginFunc')
    store.dispatch('user/login', { ...ajaxData, type: type, token: token }).then(async (res) => {
        console.log('come in storestorestore', store.state.user)
        const { errCode } = res
        if (errCode === 0) {
            // window.location.href = './learner.html'
        }
        loading.value = false
    }).catch(() => {
        loading.value = false
    })
}
const changeLoginFunc = () => {
    normalLoginTab.value = !normalLoginTab.value
}

// const isHttpUri = (search: string) => {
//     if (!search || search === '?') {
//         return false
//     }
//     const str = search.split('=')
//     if (search.startsWith('?redirect=http')) {
//         const nstr = str[1]

//         return nstr[nstr.length - 1] === '/'
//             ? nstr.substring(0, nstr.length - 1)
//             : nstr
//     }
//     return false
// }
</script>
<style lang="scss" scoped>
.box {
    padding-top: 125px;
    padding-left: 72px;
    width: 445px;
}
.login-tab {
    margin-bottom: 52px;
    .item {
        cursor: pointer;
        width: 50%;
        height: 33px;
        font-size: 24px;
        font-weight: 400;
        color: #9299a7;
        line-height: 33px;
        &.float-left {
            position: relative;
            &:after {
                content: "";
                position: absolute;
                width: 1px;
                height: 23px;
                background: #dee2e9;
                top: 5px;
                right: 0;
            }
        }
        &.float-right {
            text-align: right;
        }
        &.active {
            font-weight: 500;
            color: #3c4558;
        }
    }
}
.new-loginFunc {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 46px;
    height: 46px;
    z-index: 2;
    cursor: pointer;
    div {
        display: inline-block;
        vertical-align: middle;
        width: 50px;
        height: 50px;
    }
    .loginFuncApp {
        background: url("@/assets/login/diannao@2x.png") 50% no-repeat;
        background-size: 100% 100%;
    }
    .loginFuncNormal {
        background: url("@/assets/login/webp@2x.png") 50% no-repeat;
        background-size: 100% 100%;
    }
    .ico-login-switch-tips {
        position: absolute;
        top: 10px;
        right: 54px;
        display: block;
        font-weight: 400;
        color: #125cfb;
        line-height: 26px;
        font-size: 14px;
        height: 26px;
        &.app {
            background: url("@/assets/login/zhanghaoqipao.png") no-repeat;
            background-size: 100% 100%;
            width: 130px;
        }
        &.normal {
            background: url("@/assets/login/weixinqipao.png") no-repeat;
            background-size: 100% 100%;
            width: 85px;
        }
        span {
            padding: 5px 12px 5px 10px;
        }
    }
}
</style>
