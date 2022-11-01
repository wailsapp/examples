<template>
      <AnimBounceInUp class="manager">
        <el-card>
          <el-image :src="url"  fit="cover" />
        </el-card>
      </AnimBounceInUp>
</template>

<script setup>
import imgUrl from '@/assets/dashboard.png'
const url = ref(`${imgUrl}`)
import {ref} from "vue";
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
</script>
<style scoped lang="scss">
.manager{
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