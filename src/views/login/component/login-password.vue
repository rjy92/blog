<template>
    <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login-form" auto-complete="on" label-position="left">
        <el-form-item prop="username">
            <el-input ref="username" v-model.trim="loginForm.username" placeholder="请输入账号" name="username" type="text" tabindex="1" auto-complete="on" />
        </el-form-item>
        <el-form-item prop="password" style="margin-bottom:54px">
            <el-input
                :key="passwordType"
                ref="passwordRef"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="请输入密码"
                name="password"
                tabindex="2"
                auto-complete="on"
                @keyup.enter="handleLogin" />
            <span class="show-pwd" @click="showPwd">
                <icon-svg :name="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
        </el-form-item>

        <el-button :loading="isLoading" type="primary" class="submitbtn" @click.prevent="handleLogin">
            {{ props.buttonText?props.buttonText:'登录' }}
        </el-button>

        <p class="forgets"><span @click="findPass" v-if="!props.buttonText">忘记密码？</span></p>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, computed, ref, nextTick } from 'vue'
import { validUsername, validPassword } from '@/utils/validate'
import type { IElForm, IFormRule } from '@/types/element-plus'
// 校验的方法
const validateUsername = (rule, value, callback) => {
    if (!validUsername(value)) {
        callback(new Error('账号格式不正确'))
    } else {
        callback()
    }
}
const validatePassword = (rule, value, callback) => {
    if (!validPassword(value)) {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}

const props = defineProps({
    loading: {
        type: Boolean,
        required: true
    },
    buttonText: {
        type: [String, Boolean],
        default: false
    }
})
const passwordType = ref('password')
const isLoading = computed(() => props.loading || false)
const loginForm = reactive({
    username: '',
    password: ''
})
// ref的创建
const passwordRef = ref()
const loginFormRef = ref<IElForm | null>(null)

// emit事件的创建
const emit = defineEmits(['onlogin']) // 定义一个变量来接收父组件传来的方法

// 校验规则的创建
const rules = ref<IFormRule>({
    username: [
        { required: true, validator: validateUsername, trigger: 'blur' }
    ],
    password: [
        { required: true, validator: validatePassword, trigger: 'blur' }
    ]
})

const handleLogin = async () => {
    // 表单验证
    const valid = await loginFormRef.value?.validate()
    if (!valid) {
        return false
    }
    // 验证通过，开启时间通知
    emit('onlogin', { ...loginForm })
}

const showPwd = () => {
    if (passwordType.value === 'password') {
        passwordType.value = ''
    } else {
        passwordType.value = 'password'
    }
    nextTick(() => {
        passwordRef.value.focus()
    })
}
const findPass = () => {
    console.log('忘记密码跳转的地方')
}
</script>

<style lang="scss" scoped>

</style>
