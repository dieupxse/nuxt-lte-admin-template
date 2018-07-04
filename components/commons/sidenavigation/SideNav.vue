<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- search form -->
      <!--
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
          </span>
        </div>
      </form>
      -->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li>
          <nuxt-link to="/">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
          </nuxt-link>
        </li>
        <li class="header">GROUP</li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-files-o"></i>
            <span>Tree</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-right pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><nuxt-link to="/"><i class="fa fa-circle-o"></i> Child</nuxt-link></li>
            <li><nuxt-link to="/"><i class="fa fa-circle-o"></i> Child</nuxt-link></li>
            <li><nuxt-link to="/"><i class="fa fa-circle-o"></i> Child</nuxt-link></li>
            <li><nuxt-link to="/"><i class="fa fa-circle-o"></i> Child</nuxt-link></li>
            <li><nuxt-link to="/"><i class="fa fa-circle-o"></i> Child</nuxt-link></li>
            <li><nuxt-link to="/"><i class="fa fa-circle-o"></i> Child</nuxt-link></li>
            <li><nuxt-link to="/"><i class="fa fa-circle-o"></i> Child</nuxt-link></li>
          </ul>
        </li>
        
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {

}
</script>
