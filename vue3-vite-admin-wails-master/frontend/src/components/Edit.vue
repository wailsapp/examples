<template>
  <div class="edit">
    <el-dialog :ref="dialog"
        v-model="editFlag"
        :title="title"
        width="30%"
        :before-close="onClose">
      <el-form v-model="body" label-width="120px">
        <!--  item=模型的值,key模型的key        -->
        <el-form-item :label="item" v-for="(item,key,index) in model">
          <el-input v-model="body[key]" />
        </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="onClose">取消</el-button>
            <el-button type="primary" @click="onOk">确认</el-button>
          </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
// 编辑功能组件
import {ref} from "vue";
const dialog = ref(null)
let prop = defineProps({editFlag:Boolean,model:{},body:{},title:String});
const emit = defineEmits([ 'onClose','onOk'])
const onClose = () => {
    emit('onClose')
}
const onOk = () => {
  emit('onOk',prop.body)
}
</script>

<style scoped lang="scss">

</style>