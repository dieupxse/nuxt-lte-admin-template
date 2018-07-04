<template>
  <section class="content-header">
    <h1>
      {{contentHeaderItem.title}}
      <small>{{contentHeaderItem.desc}}</small>
    </h1>
    <ol class="breadcrumb">
      <li v-if="item.path !== ''" v-for="(item,index) in contentHeaderItem.breadcrumb" :key="index">
        <a href="#"><i :class="item.icon"></i> {{item.title}}</a>
      </li>
      <li v-else class="active">{{item.title}}</li>
    </ol>
  </section>
</template>

<script>
export default {
  props: ['contentHeaderItem']
}
</script>
