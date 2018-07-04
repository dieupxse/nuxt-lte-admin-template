import {AUTH_TOKEN_KEY} from '@/assets/js/commons/constants'
import user from '@/assets/js/api/user'
export default function ({store, route, redirect, app}) {
    var authToken = app.$cookies.get(AUTH_TOKEN_KEY)
    var path = route.path
    if(authToken) {
        return user.getCurrentUser(authToken).then((rs)=> {
            store.commit('SET_AUTH',rs.data)
            if(path==='/login') {
                redirect('/')
            }
        }).catch((err)=> {
            app.$cookies.remove(AUTH_TOKEN_KEY)
            store.commit('REMOVE_AUTH')
            if(path!=='/login') {
                redirect('/login')
            }
        })
    } else {
        if(path!=='/login') { 
            store.commit('REMOVE_AUTH')
            redirect('/login') 
        }
    }
}