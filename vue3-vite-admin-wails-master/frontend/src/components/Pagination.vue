<template>
  <div class="page">
    <el-card>
      <el-pagination
          v-model:currentPage="page.page"
          v-model:page-size="page.size"
          v-model:total="total"
          :page-sizes="[10, 20, 30, 50]"
          background
          :layout="'total, sizes, prev, pager, next, jumper'"
          :total="400" @size-change="onChange" @current-change="onChange"/>
    </el-card>
  </div>
</template>

<script setup>
// 分页组件的实现
defineProps({total:Number})
import {reactive} from 'vue'
const page = reactive({
  page:1,
  size:10,
})
const emit = defineEmits(['onChange'])
const onChange = () => {
  emit('onChange', page)
}
// 初始化回调
onChange()
</script>

<style scoped lang="scss">
.page{
  height: 75px;
  display: flex;
  align-items: center;
  .el-card{
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
  }
}
</style>