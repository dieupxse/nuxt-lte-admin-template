<template>
  <!-- Site wrapper -->
<div class="wrapper">
  <!-- Header -->
  <header-bar />
  <!-- Left side column. contains the sidebar -->
  <side-nav />
  <!-- Content Wrapper. Contains page content -->
  <div class="content" style="background:#ecf0f5">
    <transition name="page" mode="out-in">
      <nuxt />
    </transition>
  </div>
  <!-- /.content-wrapper -->
  <!-- Footer -->
  <footer-bar />
  <!-- Control Sidebar -->
  <control-side-bar />
</div>
<!-- ./wrapper -->
</template>

<script>
import SideNav from '@/components/commons/sidenavigation/SideNav'
import HeaderBar from '@/components/commons/header/HeaderBar'
import FooterBar from '@/components/commons/footer/FooterBar'
import ControlSideBar from '@/components/commons/controlsidebar/ControlSideBar'

export default {
  components: {
    SideNav,
    HeaderBar,
    FooterBar,
    ControlSideBar
  },
  updated() {

  }
}
</script>
<style>
.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
