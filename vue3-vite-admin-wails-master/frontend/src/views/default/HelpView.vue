<template>
  <AnimBounceInUp class="help">
    <el-card  >
      Help
    </el-card>

  </AnimBounceInUp>

</template>

<script setup>
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
</script>

<style scoped lang="scss">
.help{
  height: 100%;
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