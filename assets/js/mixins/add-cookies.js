import {AUTH_TOKEN_KEY} from '@/assets/js/commons/constants'
export default {
    computed: {
        $authToken () {
            return this.$cookies.get(AUTH_TOKEN_KEY)
        }
    },
    methods: {
        removeAuthToken() {
            this.$cookies.remove(AUTH_TOKEN_KEY)
            this.$store.commit('REMOVE_AUTH')
        },
        setAuthToken(token,options) {
            this.$cookies.set(AUTH_TOKEN_KEY,token, options)
        }
    }
}