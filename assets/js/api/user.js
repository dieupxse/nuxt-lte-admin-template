import {http} from './helper'
export default {
    getCurrentUser (token) {
        return new Promise((resolve, reject) => {
            http(token).get(`/user/api/user/getcurrentuser`)
            .then(response => {
            resolve(response)
            }).catch(err => {
            reject(err)
            })
        })
    },
    getUsers (token, keyword='', page=1, rowPerPage=20,orderby = "CreateDate", order = "desc") {
        return new Promise((resolve, reject) => {
            http(token).get(`/user/api/user/?page=${page}&rowPerPage=${rowPerPage}&keyword=${keyword}&orderby=${orderby}&order=${order}`)
            .then(response => {
            resolve(response)
            }).catch(err => {
            reject(err)
            })
        })
    },
    getRoles (token){
      return new Promise((resolve, reject) => {
        http(token).get(`/user/api/user/getlistroles`).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getUserById (token, id) {
      return new Promise((resolve, reject) => {
        http(token).get(`/user/api/user/getuserbyid/${id}`)
          .then(response => {
            resolve(response.data)
          }).catch(err => {
            reject(err)
        })
      })
    },
    createUser (token, user) {
      return new Promise((resolve, reject)=>{
        http(token).post(`/user/api/user/`, user).then(response => {
          resolve(response)
        }).catch(err => {
          reject(err)
        })
      })
    },
    updateUser (token, userId, user) {
      return new Promise((resolve, reject) => {
        http(token).put(`/user/api/user/${userId}`, user).then(response => {
          resolve(response)
        }).catch(err => {
          reject(err)
        })
      })
    },
    deleteUser (token, userId) {
      return new Promise((resolve, reject) => {
        http(token).delete(`/user/api/user/${userId}`).then(response => {
          resolve(response)
        }).catch(err => {
          reject(err)
        })
      })
    }
}