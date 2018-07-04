import Vuex from 'vuex'
//module store
import user from './user'

const createStore = () => {
  return new Vuex.Store({
    state: {
        auth: null
    },
    mutations: {
        SET_AUTH (state, auth) {
            state.auth = auth
        },
        REMOVE_AUTH (state) {
            state.auth = null
        }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        // console.log('nuxtServerInit')
      },
    },
    getters: {
        GET_AUTH (state) {
            return state.auth
        }
    },
    modules: {
      user
    }
  })
}
export default createStore
