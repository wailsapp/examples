<template>
  <AnimBounceInUp class="default">

    <Loading :loading-flag="loadingFlag"/>
    <CodeTool :enabled="codeFlag" @onOff="codeFlag=false"></CodeTool>
    <div class="body">
      <el-button @click="onLoading">加载动画</el-button>
      <el-button @click="codeFlag = true">代码工具</el-button>
      <Upload class="el-button">上传组件</Upload>
    </div>
    <el-card >
      <el-image :src="url"  fit="cover" />
    </el-card>
  </AnimBounceInUp>

</template>

<script setup>
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
import imgUrl from '@/assets/success.png'
import {ref} from "vue";
import Loading from "@/components/dev/Loading.vue";
import CodeTool from "@/components/dev/CodeTool.vue";
import Upload from "@/components/dev/Upload.vue";


const codeFlag = ref(false)

const onLoading = () => {
  loadingFlag.value = true
  setTimeout(()=>{
    loadingFlag.value = false
  },5000)
}
const url = ref(`${imgUrl}`)
const loadingFlag = ref(false)
</script>

<style scoped lang="scss">
.default {
  height: 100%;
  .body{
    position: absolute;
    height: 100%;
    width: 100%;
    .el-button{
       margin-top: 32px;
       margin-left: 32px;
    }
  }
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