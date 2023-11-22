<script setup>
import { ref } from 'vue'
import { EditPen, Close } from '@element-plus/icons-vue'

var patientNum = ref(500)
var bookNum = ref(200)
var finishNum = ref(250)
const userList = ref([
  {
    name: '王强',
    department: '口腔内科',
    type: 0,
    status: 0,
    fee: 10,
    createTime: '2023-10-30-10:30',
    phone: '18966666666'
  },
  {
    name: '李想',
    department: '口腔内科',
    type: 0,
    status: 1,
    fee: 10,
    createTime: '2023-10-30-10:30',
    phone: '18966666666'
  },
  {
    name: '杨晓',
    department: '口腔内科',
    type: 0,
    status: 0,
    fee: 10,
    createTime: '2023-10-30-10:30',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    type: 0,
    status: 0,
    fee: 10,
    createTime: '2023-10-30-10:30',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    type: 0,
    status: 0,
    fee: 10,
    createTime: '2023-10-30-10:30',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    type: 0,
    status: 0,
    fee: 10,
    createTime: '2023-10-30-10:30',
    phone: '18966666666'
  },
  {
    name: '王强',
    department: '口腔内科',
    type: 1,
    status: 1,
    fee: 10,
    createTime: '2023-10-30-10:30',
    phone: '18966666666'
  }
])

const PatientAdd = () => {
  console.log('ADD')

  userList.value.push({
    name: '杨毅',
    gender: '男',
    age: '32',
    phone: '15822348888',
    blood: 'A',
    ssCard: '',
    deptId: '',
    type: '0',
    fee: ''
  })
}

const PatientEdit = (row) => {
  console.log(row)
  console.log('Edit')
}
const PatientDele = (id) => {
  console.log(id)
  userList.value.splice(id, 1)
}
</script>

<template>
  <div class="doctor-info">
    <div class="ta-head">
      <el-row
        style="
          float: left;
          text-align: center;
          width: 340px;
          border-radius: 8px;
          padding: 0.5%;
        "
      >
        <el-col
          :span="6"
          style="
            background-color: #9c9fa7;
            border-radius: 3px;
            padding: 0.5%;
            color: white;
          "
          >挂号
          <span
            style="
              text-align: top;
              background-color: #604085;
              font-size: 13px;
              color: white;
            "
            >{{ patientNum }}</span
          ></el-col
        >
        <el-col
          :span="6"
          style="
            background-color: #604085;
            border-radius: 3px;
            padding: 0.5%;
            color: white;
          "
          >已预约
          <span
            style="
              text-align: top;
              background-color: black;
              font-size: 13px;
              color: white;
            "
            >{{ bookNum }}</span
          ></el-col
        >
        <el-col
          :span="6"
          style="
            background-color: #604085;
            border-radius: 3px;
            padding: 0.5;
            color: white;
          "
          >已完成
          <span
            style="
              text-align: top;
              background-color: black;
              font-size: 13px;
              color: white;
            "
            >{{ finishNum }}</span
          ></el-col
        >
      </el-row>
      <el-button
        class="add-patient"
        type="info"
        size="middle"
        round
        @click="PatientAdd"
        >添加患者
      </el-button>
    </div>

    <el-table
      class="patient-table"
      :cell-style="{ padding: '40px' }"
      :data="userList"
      style="width: 100%; background-color: #604085"
      :row-style="{ background: '#1b2127', color: 'white' }"
      :header-cell-style="{ background: '#604085', color: 'white' }"
    >
      <el-table-column label="  " align="left" width="20">
        <el-icon class="circle"></el-icon>
      </el-table-column>

      <el-table-column label="患者姓名" prop="name" align="center" width="120">
        <template #default="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="手机号码" prop="phone" align="center" width="180">
        <template #default="scope">{{ scope.row.phone }}</template>
      </el-table-column>
      <el-table-column label="挂号类别" prop="type" align="center" width="120">
        <template v-slot="scope"
          >{{ scope.row.type ? '急诊' : '平诊' }}
        </template>
      </el-table-column>
      <el-table-column
        label="挂号时间"
        prop="createTime"
        align="center"
        width="210"
      >
        <template #default="scope">{{ scope.row.createTime }}</template>
      </el-table-column>
      <el-table-column
        label="挂号科室"
        prop="department"
        align="center"
        width="150"
      >
        <template #default="scope">{{ scope.row.department }}</template>
      </el-table-column>
      <el-table-column
        label="就诊状态"
        prop="status"
        align="center"
        width="150"
      >
        <template v-slot="scope">
          <el-button :class="scope.row.status ? 'act' : 'inact'" round
            >{{ scope.row.status ? '已就诊' : '未就诊' }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="挂号费" prop="fee" align="center" width="130">
        <template #default="scope">{{ scope.row.fee }}元</template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            class="operation"
            :icon="EditPen"
            color="#604085"
            @click="PatientEdit(scope.row)"
          ></el-button>
          <el-button
            class="operation"
            :icon="Close"
            color="white"
            @click="PatientDele(scope.$index)"
          ></el-button>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>
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

.act:hover {
  background-color: #604085;
  border-color: #604085;
}

.act:focus {
  background-color: #604085;
  color: white;
  border-color: #604085;
}

.act {
  --el-button-bg-color: #604085;
  --el-button-border-color: #604085;
  --el-button-text-color: white;
}

.inact:hover {
  color: white;
  background-color: #5f5955;
  border-color: #5f5955;
}

.inact:focus {
  color: white;
  background-color: #5f5955;
  border-color: #5f5955;
}

.inact {
  --el-button-bg-color: #5f5955;
  --el-button-border-color: #5f5955;
  --el-button-text-color: white;
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
}

.el-col {
  border-radius: 10px;
  margin-right: 5px;
}

.el-row {
  margin-bottom: 10px;
}

.ta-head {
  margin-top: 2%;
  margin-bottom: 2%;
  vertical-align: middle;
  text-align: left;
}

.add-patient {
  float: right;
}

.el-table {
  .operation {
    height: 22px;
    width: 22px;
  }
}

.circle {
  background: url('src/assets/dot.png') no-repeat;
  background-size: 8px;
}

::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #604085;
}
</style>
