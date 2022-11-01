<template>
    <div class="code" v-if="enabled"  :class="animBounceInUp">
      <div class="header">
          <el-button  type="primary" @click="onQuit">退出</el-button>
      </div>

      <div class="body">
          <el-card>
            <el-input
                v-model="textarea"
                :autosize="{minRows: 26, maxRows: 26}"
                type="textarea"
                placeholder="Please input"
            />
          </el-card>
      </div>
    </div>
</template>

<script  setup>
// 暂时未完成
import {animBounceInUp} from "@/assets/anim";
import {ref} from "vue";
defineProps({enabled: Boolean});
let emits = defineEmits(["onOff"]);
const textarea = ref("")
const onQuit = () => {
     emits("onOff")
}
</script>

<style scoped lang="scss">
.code {
  z-index: 1;
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  .header{
    height: 10%;
    *{
      margin-left: 32px;
      margin-top: 32px;
    }
  }
  .body{
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-card{
      width: 60%;
      height: 70%;
    }
  }

}
</style>