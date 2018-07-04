import axios from 'axios'
import {API_BASE_URL} from '@/assets/js/commons/constants'

axios.defaults.baseURL = API_BASE_URL

const http = (token) =>  axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    }
  })

export {
  http
}
