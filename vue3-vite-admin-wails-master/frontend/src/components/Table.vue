<template>
  <div class="table">
    <div>
      <el-card class="edit">
        <el-button type="primary" @click="emit('onAdd',model);">添加</el-button>
        <el-button type="success" @click="emit('onUpdate',multipleSel[0]); " :disabled="multipleSel.length !== 1">修改
        </el-button>
        <el-button type="danger" @click="onDelete" :disabled="multipleSel.length < 1">删除</el-button>
      </el-card>

      <el-card class="body" ref="body">
        <el-table :data="data" style="width: 100%" @selection-change="onSelChange" :height="height-100">
          <el-table-column type="selection" width="55"/>
          <!--  item=模型的值,key模型的key        -->
          <el-table-column v-for="(item,key,index) in model" :label="item" :prop="key">
            <template #default="scope">
              <!-- 动态插槽名 -->
              <slot :name="key" :scope="scope">
                {{ scope.row[key] }}
              </slot>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>

  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {ElMessageBox} from "element-plus";

//model: 动态渲染table列, data: table渲染的具体数据
defineProps({model: {}, data: {type: Array},}) //设置后消除vue黄色警告，数据

const height = ref(0)

onMounted(() => {
  let selector = document.querySelector(".table");
  height.value = selector.clientHeight
})


const multipleSel = ref([])
const onSelChange = (val) => {
  multipleSel.value = val
}
// 方法回调,删除-添加-修改,进行回调
const emit = defineEmits(['onDelete', 'onAdd', 'onUpdate'])
const onDelete = () => {
  ElMessageBox.confirm('是否删除所选元素！', '删除操作', {
    confirmButtonText: '确认', cancelButtonText: '取消', type: 'error'
    , center: true,
  }).then(() => {
    emit('onDelete', multipleSel.value)
  }).catch()
}
</script>


<style scoped lang="scss">
.table {
  height: 100%;

  .edit {
    display: flex;
    align-items: center;
    height: 55px;
    margin-bottom: 4px;
  }

}
</style>