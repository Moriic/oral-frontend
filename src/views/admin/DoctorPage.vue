<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { getDoctorPage, userhandleDelete } from '@/api/user'
import { Operation } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const userList = ref([])
const loading = ref(false)
const userinfo = ref()

const getUserList = async () => {
  loading.value = true
  const res = await getDoctorPage(1, 10)
  userList.value = res.data.records
  loading.value = false
}
getUserList()

const handleDelete = async (row) => {
  await ElMessageBox.confirm('你确认要删除该分类么', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await userhandleDelete(row.id)
  ElMessage.success('删除成功')
  await getUserList()
}
const handleEdit = (row) => {
  userinfo.value.open(row)
}
const handleAdd = () => {
  userinfo.value.open({})
}
const filterOptions = [
  {
    value: 'Option1',
    label: 'Option1'
  }
]
</script>

<template>
  <div style="background: #1b2127; padding: 20px">
    <div
      style="display: flex; justify-content: space-between; margin-bottom: 20px"
    >
      <el-select
        popper-class="select-form"
        style="background-color: #604085"
        placeholder="请选择筛选条件"
      >
        <template #prefix>
          <span style="padding-left: 5px">
            <el-icon>
              <Operation></Operation>
            </el-icon>
          </span>
        </template>
        <el-option
          v-for="item in filterOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button @click="handleAdd">添加患者</el-button>
    </div>
    <el-table
      class="table-color"
      v-loading="loading"
      :data="userList"
      style="width: 100%"
      :row-style="{ background: '#1b2127', color: 'white' }"
      :header-cell-style="{ background: '#604085', color: 'white' }"
    >
      <el-table-column label="医生姓名" prop="name" />
      <el-table-column label="科室" prop="department" />
      <el-table-column label="职称" prop="job" />
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
            @click="handleDelete(row, $index)"
          ></el-button>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #604085;
}
</style>
