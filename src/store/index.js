import { createStore } from "vuex";
import { userStore } from "./modules/user.store.js";
import { boardStore } from "./modules/board.store.js";

const store = createStore({
    strict: true,
    state: {
        isLoading: false,
        userMsg: {
            msg: '',
            style: '',
            isAlive: false
        }
    },
    getters: {
        isLoading(state) {
            return JSON.parse(JSON.stringify(state.isLoading))
        },
        userMsg(state) {
            return state.userMsg
        }
    },
    mutations: {
        setIsLoading(state, { loadingStatus }) {
            state.isLoading = loadingStatus
        },
        setUserMsg(state, { msg, style, isAlive }) {
            state.userMsg = {
                msg,
                style,
                isAlive
            }
        }

    },
    actions: {
        flashUserMsg(context, { msg, style }) {
            context.commit({ type: 'setUserMsg', msg, style, isAlive: true })
            setTimeout(() => {
                context.commit({ type: 'setUserMsg', msg: '', style: '', isAlive: false })
            }, 2000)
        }
    },
    modules: {
        userStore,
        boardStore
    }
})

export default store