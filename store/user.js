import user from '@/assets/js/api/user'

const state = () => ({
    users: [],
    user: {},
    params: {
        page: 1,
        rowPerPage: 20,
        keyword: '',
        orderby: 'CreateDate',
        order: 'desc'
    }
})

const actions = {
    DP_GET_USERS({commit}, params) {
        const {token,page, keyword, rowPerPage, orderby, order} = params
        commit('SET_SEARCH_PARAMS',params)
        user.getUsers(token, keyword, page, rowPerPage, orderby, order).then((rs)=> {
            commit('SET_USERS',rs.data)
        })
    }
}

const mutations = {
    SET_USERS (state, data) {
        state.users = data
    },
    SET_SEARCH_PARAMS (state, params) {
        state.params = params
    }
}

const getters = {
    GET_USERS (state) {
        return state.users
    }
}

export default {
    state,
    actions,
    mutations,
    getters
  }  