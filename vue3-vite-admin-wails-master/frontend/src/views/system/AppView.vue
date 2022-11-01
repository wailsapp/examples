<template>
  <AnimBounceInUp class="app">
      <Table :model="model" :data="data" @onDelete="onDelete" @onAdd="onAdd" @onUpdate="onUpdate" >
        <template  #sex="scope">
          {{scope.scope.row.sex === 1 ? "男的":"女的"}}
        </template>
        <template  #status="scope">
          {{scope.scope.row.status === 1 ? "正常":"关闭"}}
        </template>
      </Table>
      <Pagination  @onChange="onChange" :total="total"></Pagination>
      <!--  编辑功能    -->
      <Edit :title="title" :edit-flag="editFlag" :model="model" :body="body"  @onOk="onCloseEdit" @onClose="editFlag = false" ></Edit>
  </AnimBounceInUp>

</template>

<script setup>
import Pagination from "@/components/Pagination.vue";
import Table from "@/components/Table.vue";
import { ref} from "vue";
import Edit from "@/components/Edit.vue";
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
// 动态表单
const model = {
   index:"索引",
   name:"姓名",
   sex:"性别",
   addr:"地址",
   status:"状态",
   createTime:"创建时间",
}
// 模拟数据
let modelData = {
  index:0,
  name:"小蓝",
  sex:2,
  addr:"北京市",
  status:1,
  createTime:"2022/10/7",
}

// 列表 和 总数
let data = ref([])
let total = ref(50)
const onList = () => {
  for (let i = 0; i < 30; i++) {
    let v = JSON.parse(JSON.stringify(modelData))
    v.index = i;
    data.value.push(v)
  }
}

//分页数据
const onChange = (v) => {
  console.log(v)
  onList()
}
// 删除
const onDelete = (v) => {
  for (let i in v) {
    for (let j = 0; j < data.value.length; j++) {
      if (data.value[j].index === v[i].index) {
        data.value.splice(j,1)
        break
      }
    }
  }
}

// 编辑部分
let title = ref("")
let titles = ["添加","修改"]
const editFlag = ref(false)
const body = ref({})

const onAdd = () => { // 添加
  title.value = titles[0]
  editFlag.value=true;
  body.value={}
}

const onUpdate = (v) => { // 修改
  title.value = titles[1]
  editFlag.value = true
  body.value = v;
}

const onCloseEdit = (v) => { // 关闭
  // 回传的数据 - 这里需要根据  title 来进行修改或者添加操作
  console.log(v)
  editFlag.value = false
}

</script>

<style scoped lang="scss">
.app{
  height: 100%;
  display: flex;
  flex-direction: column;

}
</style>