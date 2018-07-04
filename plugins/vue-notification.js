import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
const toastTypes = {
    default: 'default',
    success: 'success',
    error: 'error',
    info: 'info',
    warn: 'warn',
    primary: 'primary'
  }
miniToastr.init({types: toastTypes})
miniToastr.setIcon('error', 'i', {'class': 'fa fa-warning'})
miniToastr.setIcon('info', 'i', {'class': 'fa fa-info-circle'})
miniToastr.setIcon('success', 'i', {'class': 'fa fa-check-circle-o'})
miniToastr.setIcon('warn', 'i', {'class': 'fa fa-warning'})
function toast ({title, message, type, timeout, cb}) {
    type = type ? type : 'default'
    return miniToastr[type](message, title, timeout, cb)
}
const options = {
    default: toast,
    success: toast,
    error: toast,
    info: toast,
    warn: toast,
    primary: toast
}
Vue.use(VueNotifications, options)