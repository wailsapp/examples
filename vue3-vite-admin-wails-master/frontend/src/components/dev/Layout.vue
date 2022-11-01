<template>
  <!-- 插槽功能 -->
  <div class="layout">
    <!-- 用于接受父组件的参数  -->
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// 组件未完善

</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .body {
    height: 95%;
    width: 95%;
  }
}
</style>