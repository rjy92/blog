import { createStore, useStore as baseUseStore, createLogger, Store } from 'vuex'
import user, { UserState } from './modules/user'
import { InjectionKey } from 'vue'

// root层state类型定义
export interface RootStateTypes {
    user: UserState
}
// 在开发化境，开始日志
const debug = import.meta.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

// 定义 injection key
export const key: InjectionKey<Store<RootStateTypes>> = Symbol()

export const store = createStore<RootStateTypes>({
    plugins,
    modules: {
        user
    }
})
// 定义自己的 `useStore` 组合式函数
export function useStore () {
    return baseUseStore(key)
}
