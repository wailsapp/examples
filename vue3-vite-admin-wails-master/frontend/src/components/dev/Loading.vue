<template>
  <div v-if="loadingFlag" class="loading">
      <el-image  :src="url" style="width: 20%;height:45%">
      </el-image>
  </div>
</template>

<script setup>
// 一个简单的loading组件,您也可以把他当作全局loading来使用
import imgUrl from '@/assets/loading.gif'
import {ref} from "vue";
const url = ref(`${imgUrl}`)
defineProps({loadingFlag: Boolean})

</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>