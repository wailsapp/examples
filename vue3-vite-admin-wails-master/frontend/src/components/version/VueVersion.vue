<template>
  <el-link :underline="false" href="https://cn.vuejs.org/" target="_blank">
      <el-button type="primary" icon="Share">Vue {{vueVersion}}</el-button>
  </el-link>
</template>

<script setup>
import { version as vueVersion } from 'vue'


</script>

<style scoped lang="scss">

</style>