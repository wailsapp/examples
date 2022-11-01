<template>
    <el-container class="home" >
      <el-aside  :class="animBackInRight">
        <el-menu router text-color="white" background-color="#292d3e"
                 :default-active="store.path"  @select="store.setSelIndex">
          <el-menu-item v-for="(v,index) in store.menus" :index="v.path"  >
            <el-icon><component :is="v.icon"></component></el-icon><span>{{ v.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container style="display: flex;flex-direction: column">
        <div  class="header">
          <div class="el-card" :class="animBounceInDown">
            <el-link :underline="false" href="https://gitee.com/licheng1013/vue3-vite-admin-template" target="_blank" style="margin-right: 4px">
              <el-button type="primary" icon="Share">项目地址</el-button>
            </el-link>
            <VueVersion ></VueVersion >
            <el-button type="primary" @click="onLogout">退出</el-button>
          </div>
        </div>
        <div >
          <AnimBounceInUp>
            <Navigation class="el-card navBar" ></Navigation >
          </AnimBounceInUp>
        </div>

        <RouterView class="main" :key="store.refresh"/>
      </el-container>
    </el-container>
</template>

<script setup>

// 动画
import {animBounceInDown, animBackInRight} from "@/assets/anim"

import router from "@/router";
import {logout} from "@/stores/auth";
import {useStore} from "@/stores/counter";
import VueVersion from "@/components/version/VueVersion.vue";
import Navigation from "@/components/Navigation.vue";
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
import Layout from "@/components/dev/Layout.vue";
const store =  useStore()



// 退出登入-这里可以做你的清理动作
const onLogout = () => {
  logout()
  router.push({path: "/"})
}


</script>

<style scoped lang="scss">
.home {
  height: 100%;

  .el-aside{
    width: 150px;
  }

  .el-aside,.el-menu {
    height: 100%;
    background-color: #292d3e;
  }

  .el-menu-item.is-active{
    background-color: rgba(0, 250, 250, 0.1);
  }


  // 设置内边距
  .header,.main,.navBar{
    margin-top: 4px;
    margin-left: 4px;
    margin-right: 4px;
  }
  // 这里必须要设置，否则会出现滚动条
  .main{
    margin-bottom: 16px;
  }

  .header {
    .el-card {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: end;
      align-items: center;
      *{
        margin-right: 16px;
      }
    }
  }

}

</style>