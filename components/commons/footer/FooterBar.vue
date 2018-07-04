<template>
   <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> {{SITE_VERSION}}
    </div>
    <strong>Copyright &copy; 2018 by {{SITE_OWNER}}.</strong> All rights
    reserved.
  </footer>
</template>

<script>
import {SITE_OWNER, SITE_VERSION} from '@/assets/js/commons/constants.js'
export default {
  data () {
    return {
      SITE_OWNER,
      SITE_VERSION
    }
  }
}
</script>