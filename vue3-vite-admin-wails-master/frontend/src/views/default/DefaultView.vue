<template>
  <AnimBounceInUp  class="default">
    <el-card  >
      <el-image :src="url"  fit="cover" />
    </el-card>
  </AnimBounceInUp>
</template>

<script setup>
import imgUrl from '@/assets/welcome.png'
import {ref} from "vue";
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
const url = ref(`${imgUrl}`)
</script>

<style scoped lang="scss">
.default {
  overflow: hidden;
  height: 100%;
  .el-card{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-image{
      width: 100%;
      height: 100%;
    }
  }
}
</style>