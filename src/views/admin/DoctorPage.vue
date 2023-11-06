<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { userGetinfo, userhandleAdd, userhandleEdit, userhandleDelete } from 'src/api/user'
import { Operation } from "@element-plus/icons-vue"
const userList = ref([])
const loading = ref(false)
const userinfo = ref()

const getuserList = async () => {
  loading.value = true
  const res = await userGetinfo()
  userList.value = res.data.data
  loading.value = false
}
getuserList()

const handleDele = async (row) => {
  await ElMessageBox.confirm('你确认要删除该分类么', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await userhandleDelete(row.id)
  ElMessage.success('删除成功')
  getuserList()
}
const handleEdit = (row, id ) => {
  userinfo.value.open(row)
}
const handleAdd = () => {
  userinfo.value.open({})
}

const onSuccess = () => {
  getuserlList()
}
</script>

<template>
    <page-container title="医生信息页">
     
      <template #header>
            <div>
                <el-select popper-class="select-form" style="background-color: #604085" v-model="filterValue"
                     placeholder="请选择筛选条件">
                <template #prefix>
                <span style="padding-left: 5px;"> <el-icon>
              <Operation></Operation>
            </el-icon> </span>
            </template>
            <el-option v-for="item in filterOptions"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"
            >
            </el-option>
          </el-select>
                <el-button @click="handleAdd">添加分类</el-button>
            </div>
               
        </template>
    <el-table v-loading="loading" :data="filterTableData" style="width: 100%">
       <el-table-column label="医生姓名" prop="date" />
       <el-table-column label="科室" prop="name" />
       <el-table-column label="职称" prop="date" />
       <el-table-column label="办公位置" prop="office" />
       <el-table-column label="联系方式" prop="phone" />
       <el-table-column label="操作" align="right">
           
           <template #default="{ row, $index }">
            <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="handleEdit(row, $index)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="handleDele(row, $index)"
          ></el-button>
           </template>
       </el-table-column>

       <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
   </el-table>
</page-container>
</template>

<style lang="scss" scoped></style>
