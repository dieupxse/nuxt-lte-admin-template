import {http} from './helper'
export default {
    authenticate (username,password,token) {
        return new Promise((resolve, reject) => {
            http(token).post(`/authen/api/authentication`, {
                Username: username,
                Password: password
            })
            .then(response => {
            resolve(response)
            }).catch(err => {
            reject(err)
            })
        })
    }
}