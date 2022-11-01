<template>
  <div class="login">
    <div class="login-form">
      <el-card :class="animBounceIn">
        <h2>管理后台</h2>
        <el-form label-position="right" label-width="50px" :model="loginForm" size="large">
          <el-form-item label="账号">
            <el-input v-model="loginForm.username"/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.password"/>
          </el-form-item>
          <el-button type="primary" size="large" @click="onLogin">登入</el-button>
        </el-form>
      </el-card>
    </div>

  </div>
</template>

<script setup>
import {animBounceIn} from "@/assets/anim";
import {reactive, ref} from "vue";
import router from "@/router";
import {login} from "@/stores/auth";

let loginForm = reactive({
  username: "admin",
  password: "admin",
})

// 登入处理
let onLogin = ()=>{
  login("ok")
  router.push({path:"/manager"})
}

</script>

<style scoped lang="scss">
.login {
  background-color: #292d3e;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  // 登入样式
  .login-form {
    margin-top: 275px;
    .el-card{
      text-align: center;
      width: 350px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .el-button{
      width: 100%;
    }
  }
}

.astronaut{
  position: absolute;
  left: 70%;
  top: 32.5%;
}
</style>