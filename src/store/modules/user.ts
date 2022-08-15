import { Module } from 'vuex'
import { RootStateTypes } from '../index'
import { login } from '@/api/user'

export interface UserState {
    token: string,
    loginModes: number,
    name: string,
    avatar: string
}
// Module接收两个泛型  interface Module<S, R>   第一个是当前模块state类型，第二个是全局state类型
const user: Module<UserState, RootStateTypes> = {
    namespaced: true,
    state: {
        token: '1',
        loginModes: 1,
        name: '2',
        avatar: '2'
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            console.log('statestatestate', token)
            state.token = token
            console.log('statestatestatestatestatestatestate', state)
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        }
    },
    actions: {
        login ({ commit, state }, userInfo) {
            const { username, password, type } = userInfo
            const loginFn = login
            return new Promise((resolve, reject) => {
                loginFn({ username: username.trim(), password: password, type }).then(response => {
                    const { data, errCode } = response
                    console.log('come in loginloginloginlogin', response)
                    if (errCode === 0) {
                        const token = data.token_type + ' ' + data.access_token
                        commit('SET_TOKEN', token)
                        // setToken(token)
                        resolve(response)
                    } else {
                        resolve(response)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
