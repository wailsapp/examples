<template>
  <div class="navBar">
    <el-icon style="margin-left: 16px;margin-bottom: 2px" color="red" class="no-sel" @click="onOffAll"><DeleteFilled /></el-icon>
    <div v-for="(i,index) in navBar.menus" style="display: flex" :class="use.path === i.path ? 'sel' :'no-sel' ">
      <div @click="onChange(i.path)">
        <span class="routerBtn">{{ i.name }}
        </span>
      </div>
      <div style="padding-top: 2px " @click="onDelete(index,i.path)">
        <el-icon>
          <Close/>
        </el-icon>
      </div>
    </div>
  </div>

</template>

<script setup>
import {navBarStore, useStore} from "@/stores/counter";
import router from "@/router";
import {onAnimBounce} from "@/assets/anim";

const use = useStore()
const navBar = navBarStore()

const onOffAll = () => {
  navBar.removeAll()
}

const onChange = (v) => {
  use.path = v;
  use.refresh = new Date().getTime()
  router.push({path: use.path})
}

const onDelete = (v, path) => {
  use.remove(v)
  // 判断不是当前选择中的
  if (path !== use.path) {
    return
  }
  // 索引大于0就往前移
  if (v > 0) {
    use.path = navBar.menus[v - 1].path
  } else { //否则往后移动
    if (navBar.menus.length !== 0) {
      use.path = navBar.menus[0].path
      console.log(use.path)
    }
  }
  router.push({path: use.path})
  use.refresh = new Date().getTime()
}

</script>

<style scoped lang="scss">
.navBar {
  height: 35px;
  display: flex;
  overflow: hidden;
  align-items: center;
  font-size: 16px;

  .sel {
    color: coral;
  }

  .sel, .no-sel {
    cursor: pointer;
  }

  .routerBtn {
    width: 50px;
    margin-left: 8px;
  }


}

</style>