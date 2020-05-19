import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++
        },
        addN(state, n) {
            state.count += n
        },
        minus(state) {
            state.count--;
        },
        minusN(state, n) {
            state.count -= n
        }
    },
    actions: {
        addAsync(context) {
            setTimeout(() => {
                //在actions中， 不能直接修改state中的数据
                //必须通过 context.commit() 触发某个 mutation 才行
                context.commit("add")
            }, 1000)
        }
    }
})