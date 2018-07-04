<template>
  <li class="dropdown user user-menu">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    <img src="@/assets/img/user2-160x160.jpg" class="user-image" alt="User Image">
    <span class="hidden-xs">{{user.fullName}}</span>
    </a>
    <ul class="dropdown-menu">
        <!-- User image -->
        <li class="user-header">
        <img src="@/assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">

        <p>
            
            <small>Member since Nov. 2012</small>
        </p>
        </li>
        <!-- Menu Body -->
        <li class="user-body">
        <div class="row">
            <div class="col-xs-4 text-center">
            <a href="#">Followers</a>
            </div>
            <div class="col-xs-4 text-center">
            <a href="#">Sales</a>
            </div>
            <div class="col-xs-4 text-center">
            <a href="#">Friends</a>
            </div>
        </div>
        <!-- /.row -->
        </li>
        <!-- Menu Footer-->
        <li class="user-footer">
        <div class="pull-left">
            <a href="#" class="btn btn-default btn-flat">Profile</a>
        </div>
        <div class="pull-right">
            <a href="#" class="btn btn-default btn-flat" @click="signout">Sign out</a>
        </div>
        </li>
    </ul>
  </li>
</template>

<script>
import {mapGetters} from 'vuex'
import {AUTH_TOKEN_KEY} from '@/assets/js/commons/constants'
export default {
    data () {
        return {

        }
    },
    computed: {
        ...mapGetters({
            auth: 'GET_AUTH'
        }),
        user () {
            return this.auth ? this.auth.user : {};
        },
        roles () {
            return this.auth ? this.auth.roles: {};
        }
    },
    methods: {
        signout(e) {
            e.preventDefault();
            this.$cookies.remove(AUTH_TOKEN_KEY)
            this.$store.commit('REMOVE_AUTH')
            window.location.href = '/login'
        }
    },
    mounted () {
        
    }
}
</script>

<style>

</style>
