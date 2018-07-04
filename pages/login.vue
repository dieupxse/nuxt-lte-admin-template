<template>
  <div class="login-box">
  <div class="login-logo">
    <a><b>VAS</b> DEALER</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Đăng nhập để sử dụng hệ thống</p>
    <form @submit="submit" method="post" autocomplete="off">
        <input-group 
            :placeholder="'Username hoặc email'"
            :error="$v.username.$error" 
            :errormsg="'Username không được để trống'"
            :icon="['glyphicon', 'glyphicon-envelope', 'form-control-feedback']" 
            v-model="username" 
            @blur="$v.username.$touch()"
            />
        <input-group 
            :placeholder="'Mật khẩu'"
            :type="'password'"
            :error="$v.password.$error" 
            :errormsg="'Mật khẩu không được để trống'"
            :icon="['glyphicon', 'glyphicon-lock', 'form-control-feedback']" 
            v-model="password" 
            @blur="$v.password.$touch()"
            />
      <div class="form-group row">
        <div class="col-xs-8">
          <input type="checkbox" v-model="rememberMe"> Remember Me
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Đăng nhập</button>
        </div>
        <!-- /.col -->
      </div>
    </form>
  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import InputGroup from '@/components/ui-kits/input-group'
import auth from '@/assets/js/api/authenticate'
import {AUTH_TOKEN_KEY} from '@/assets/js/commons/constants'
export default {
    layout: 'login',
    components: {
        InputGroup
    },
    asyncData ({app}) {
        return {

        }
    },
    data () {

        return {
            username: '',
            password: '',
            token: this.$authToken,
            rememberMe: false
        }
    },
    validations: {
        username: {
            required
        },
        password: {
            required
        }
    },
    notifications: {
      showLoginError: { // You can have any name you want instead of 'showLoginError'
        title: 'Login Failed',
        message: 'Failed to authenticate',
        type: 'default', // You also can use 'VueNotifications.types.error' instead of 'error'
        //timeout: 30000
      }
    },
    methods: {
        submit(e) {
            e.preventDefault();
            if(!this.$v.$invalid) {
                auth.authenticate(this.username,this.password, this.token).then((rs)=> {
                    this.setAuthToken(rs.data.token, {
                        maxAge: 60 * 60 * 24 * rs.data.expTokenDate
                    })
                    window.location.href = '/'
                }).catch((err) => {
                    console.log(err)
                    this.removeAuthToken();
                    this.showLoginError({
                        title: 'Đăng nhập thất bại', 
                        message: 'Thông tin đăng nhập không chính xác', 
                        type: 'error'
                    })
                })

            } else {
                this.showLoginError({
                    title: 'Đăng nhập thất bại', 
                    message: 'Thông tin đăng nhập không hợp lệ', 
                    type: 'error'
                    })
            }
        }
    }
}
</script>

<style>

</style>
