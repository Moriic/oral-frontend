<script setup>
import { ref } from 'vue'
import { EditPen, Operation, Close } from '@element-plus/icons-vue'
import { doctorGetinfo, userhandleDelete } from '@/api/user'
import DoctorEdit from '@/views/admin/DoctorEdit.vue'
const loading = ref(false)
const userList = ref([])
const dialog = ref()
const total = ref()
const page = ref()
const pagesize = ref()
const filterValue = ref('')

const filterOptions = [
  {
    value: 'option1',
    label: '条件1'
  },
  {
    value: 'option2',
    label: '条件2'
  }
]

const getuserList = async (page, pagesize) => {
  loading.value = true
  const res = await doctorGetinfo(page, pagesize)
  userList.value = res.data.data.records
  total.value = res.data.data.total
  loading.value = false
}
getuserList()

/*const userList = ref([
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    job: '主任医师',
    office: 'H3-102',
    phone: '18966666666'
  }
])*/
const handleAdd = () => {
  console.log('ADD')
  //userList.value.push({
  // name: '杨毅',
  // department: '口腔内科',
  // job: '主任医师',
  // office: 'H3-102',
  // phone: '18966666666'
  //})
  dialog.value.open({})
}
const handleEdit = (row) => {
  dialog.value.open(row)
  console.log('Edit')
}
const handleDele = async (row) => {
  await ElMessageBox.confirm('你确认要删除该医生', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await userhandleDelete(row.id)
  ElMessage.success('删除成功')
  getuserList()

  console.log('Delete')
  //userList.value.splice(id, 1)
}
const handleSizeChange = (val) => {
  pagesize.value = val
  getuserList()
}
const handlepageChange = (val) => {
  page.value = val
  getuserList()
}
</script>

<template>
  <div class="doctor-info">
    <div class="ta-head">
      <el-select
        popper-class="select-form"
        v-model="filterValue"
        style="background-color: #604085"
        placeholder="请选择科室"
      >
        <template #prefix>
          <span style="padding-left: 35px">
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
      <el-button
        class="add-doctor"
        type="info"
        size="middle"
        round
        @click="handleAdd"
        >添加医生</el-button
      >
    </div>

    <el-table
      class="dctor-table"
      :cell-style="{ padding: '40px' }"
      :header-cell-style="{
        backgroundColor: '#604085'
      }"
      :data="userList"
      style="width: 100% ,background-color:#604085"
    >
      <el-table-column label="  " align="center" width="100">
        <el-icon class="circle"></el-icon>
      </el-table-column>

      <el-table-column label="医生姓名" prop="name" align="center" width="150">
        <template #default="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column
        label="科室"
        prop="department"
        align="center"
        width="150"
      >
        <template #default="scope">{{ scope.row.department }}</template>
      </el-table-column>
      <el-table-column label="职称" prop="job" align="center" width="150">
        <template #default="scope">{{ scope.row.job }}</template>
      </el-table-column>
      <el-table-column
        label="办公位置"
        prop="office"
        align="center"
        width="150"
      >
        <template #default="scope">{{ scope.row.office }}</template>
      </el-table-column>
      <el-table-column label="联系方式" prop="phone" align="center" width="200">
        <template #default="scope">{{ scope.row.phone }}</template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            :icon="EditPen"
            color="#604085"
            @click="handleEdit(scope.row)"
          ></el-button>
          <el-button
            :icon="Close"
            color="white"
            @click="handleDele(scope.$index)"
          ></el-button>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>
    <doctor-edit ref="dialog" @success="onSuccess"></doctor-edit>
    <div class="block">
      <el-pagination
        style="padding-top: 15px"
        @size-change="handleSizeChange"
        @current-change="handlepageChange"
        :current-page="page"
        :page-sizes="[8, 10, 20, 30]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style lang="scss">
.ta-head {
  .el-input {
    --el-input-text-color: white;
    --el-input-border-color: #604085;
    --el-input-bg-color: #604085;
    --el-input-placeholder-color: white;
    --el-input-width: 100%;
  }
}

.el-table {
  --el-table-tr-bg-color: black;
  --el-table-border: none;
}
</style>
<style lang="scss" scoped>
.doctor-info {
  background-color: black;
  margin-top: 10px;
  padding: 1px 1% 1%;
  border-radius: 8px;
  border-top: 10px;
  margin-top: 1%;
  margin-left: 5%;
  width: 98%;
  height: 100%;
}
.doctor-table {
  color: black;
}
.ta-head {
  margin-top: 2%;
  margin-bottom: 2%;
  vertical-align: bottom;
  text-align: left;
}
.add-doctor {
  float: right;
}
.el-table {
  .el-button {
    height: 22px;
    width: 22px;
  }
}
.circle {
  background: url('src/assets/dot.png') no-repeat;
  background-size: 10px;
}
</style>
