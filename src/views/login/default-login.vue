<template>
    <div class="login-container login-ele">
        <div>
            <img class="logo-51" :src="loginConfig.leftTopLogo" :style="`height:${loginConfig.leftTopLogoHeight || '22px'}`" alt="logo" />
            <div class="content-mid">
                <LoginCarousel />
                <LoginContent />
            </div>
            <div class="footer">
                <h5 class="h5_xian" style="width: 375px">
                    51CTO学堂｜企业版&nbsp;·&nbsp;
                    <li style="display: inline-block; list-style-type: square">
                        让数字化专业人才成长更简单
                    </li>
                </h5>
                <p style="font-size: 14px">
                    Copyright &#169; 2005-2022 51CTO.com |
                    北京无忧创想信息技术有限公司 | 京ICP备09067568号
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import loginConfig from '@/utils/config/loginConfig'
// import { ref } from 'vue'
import LoginCarousel from './component/login-carousel.vue'
import LoginContent from './component/login-content.vue'
// import LoginPassword from './component/login-password.vue'
// import LoginPhone from './component/login-phone.vue'

// const loginType = ref(1)
</script>
<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
        color: $cursor;
    }
}
/* reset element-ui css */
.login-container {
    .el-input {
        display: inline-block;
        height: 46px;
        width: 85%;
        &:before {
            content: "";
            width: 100%;
            height: 2px;
            background: #fff;
            top: -1px;
            left: 0px;
            position: absolute;
        }
        & input {
            background: #fff !important;
            background-color: #fff !important;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            /* padding: 12px 5px 12px 15px; */
            color: #3c4558;
            height: 44px !important;
            caret-color: #3c4558;
            padding-left: 0 !important;
            font-size: 14px !important;
            &:-webkit-autofill {
                /* box-shadow: 0 0 0px 1000px transparent inset !important; */
                box-shadow: 0 0 0px 1000px white inset !important;
                background-color: transparent !important;
                background-image: none;
                -webkit-text-fill-color: #3c4558 !important;
                font-size: 18px !important;
            }
            &::-webkit-input-placeholder {
                font-size: 14px;
                color: #9299a7;
            }
            &:-webkit-autofill::first-line {
                font-size: 16px;
            }
        }
    }

    .el-form-item {
        border-bottom: 1px solid #dcdcdc;
        color: #454545;
        margin-bottom: 43px;
    }
    & .submitbtn {
        width: 376px;
        height: 54px;
        background: rgba(18, 92, 251, 1);
        border-radius: 27px;
        line-height: 0;
        padding: 0;
        margin-bottom: 20px;
        span {
            line-height: 54px;
            font-size: 16px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            letter-spacing: 4px;
        }
    }
    & .forgets {
        margin: 0 auto;
        text-align: center;
        span {
            cursor: pointer;
            height: 20px;
            font-size: 14px;
            font-weight: 500;
            color: #125cfb;
            line-height: 20px;
        }
        &:hover {
            span {
                color: #125cfb;
            }
        }
    }
    & .forgets:hover {
        span {
            color: rgb(18, 92, 251);
        }
    }
    .el-form-item__error {
        color: #ff4949;
        font-size: 12px;
        line-height: 1;
        padding-top: 4px;
        position: absolute;
        top: 100%;
        left: 0;
        font-size: 14px !important;
        margin-top: 5px;
    }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
    background-color: #fff;
    width: 100%;
    height: 100%;
    min-height: 689px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    .logo-51 {
        position: absolute;
        width: auto;
        height: 22px;
        left: 90px;
        top: 30px;
    }
    .content-mid {
        transform: scale(0.9);
        position: absolute;
        height: 550px;
        max-width: 100%;
        overflow: hidden;
        background-color: #fff;
        border-radius: 10px;
        left: 50%;
        top: 50%;
        margin-top: -275px;
        display: flex;

        width: 906px;
        margin-left: -453px;
        background: #ffffff;
        box-shadow: 0px 2px 44px 0px rgba(0, 18, 97, 0.08);
        border-radius: 10px;
        &.v-edu {
            background-color: #fff;
        }
        & >>> .el-input__inner:-webkit-input-placeholder {
            font-size: 14px;
            color: #999;
        }
        & >>> .el-input__inner {
            color: #333;
            font-size: 16px !important;
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
    }

    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #9299a7;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: #9299a7;
        cursor: pointer;
        user-select: none;
    }
}
.footer {
    width: 603px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -301px;
    text-align: center;
}
.footer h5 {
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #666666;
    line-height: 14px;
}
.footer p {
    color: #999999;
    margin-top: 17px;
}
.footer {
    .h5_xian {
        width: 320px;
        height: 20px;
        margin: 0 auto;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #666666;
        line-height: 14px;
        text-align: center;
        position: relative;
        &:before {
            position: absolute;
            content: "";
            width: 14px;
            height: 1px;
            background: #666666;
            left: 0;
            top: 7px;
        }
        &:after {
            position: absolute;
            content: "";
            width: 14px;
            height: 1px;
            background: #666666;
            right: 0;
            top: 7px;
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
        background: url("../../assets/diannao1@2x.png") 50% no-repeat;
        background-size: 100% 100%;
    }
    .loginFuncNormal {
        background: url("../../assets/webp-6@2x.png") 50% no-repeat;
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
            background: url("../../assets/zhanghaoqipao.png") no-repeat;
            background-size: 100% 100%;
            width: 130px;
        }
        &.normal {
            background: url("../../assets/weixinqipao.png") no-repeat;
            background-size: 100% 100%;
            width: 85px;
        }
        span {
            padding: 5px 12px 5px 10px;
        }
    }
}
.binding {
    .item {
        margin-bottom: 52px;
        width: 100%;
        font-size: 24px;
        font-weight: 500;
        color: #3c4558;
        line-height: 33px;
        text-align: center;
    }
}
.box {
    padding-top: 125px;
    padding-left: 72px;
    width: 445px;
}
</style>
