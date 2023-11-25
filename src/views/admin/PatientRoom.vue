<script setup>

import { Back, Document, Operation } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

const filterValue = ref('口腔外科')
let isactive = reactive(ref(0))
const filterOptions = [
  {
    value: 'option1',
    label: '口腔外科'
  },
  {
    value: 'option2',
    label: '口腔外科'
  }]
const roomList = ref(  [
  {
    roomLev: '普通病房',
    roomID: '401',
    roomNurse: '护士-吴芳',
    roomBeds: [
      {
        bedID: '1号床',
        bedInTime: '2023-10-14-10:30',
        patientName: '李四',
        bedDays: '第1天'
      },
    ]
  },
  {
    roomLev: '普通病房',
    roomID: '402',
    roomNurse: '护士-吴芳',
    roomBeds: [
      {
        bedID: '1号床',
        bedInTime: '2023-10-14-10:30',
        patientName: '王四',
        bedDays: '第1天'
      },
      {
        bedID: '2号床',
        bedInTime: '2023-10-14-10:30',
        patientName: '王四',
        bedDays: '第1天'
      }
    ]
  },
  {
    roomLev: '普通病房',
    roomID: '403',
    roomNurse: '护士-吴芳',
    roomBeds: [
      {
        bedID: '1号床',
        bedInTime: '2023-10-14-10:30',
        patientName: '王四',
        bedDays: '第1天'
      }
    ]
  },
  {
    roomLev: '普通病房',
    roomID: '404',
    roomNurse: '护士-吴芳',
    roomBeds: [
      {
        bedID: '1号床',
        bedInTime: '2023-10-14-10:30',
        patientName: '王四',
        bedDays: '第1天'
      },
      {
        bedID: '1号床',
        bedInTime: '2023-10-14-10:30',
        patientName: '王四',
        bedDays: '第1天'
      },
      {
        bedID: '1号床',
        bedInTime: '2023-10-14-10:30',
        patientName: '王四',
        bedDays: '第1天'
      },
      {
        bedID: '1号床',
        bedInTime: '2023-10-14-10:30',
        patientName: '王四',
        bedDays: '第1天'
      }
    ]
  }
])

let dialogVisible = reactive(ref(false))
let patientToAdd = ref({
  name: '',
  illness: '',
  state: '',
  days: ''
})
const addPatient = () => {
  console.log(roomList.value[isactive.value].roomBeds.push(patientToAdd))
  /*
  roomList.value[isactive].roomBeds.push(patientToAdd)

   */
}
</script>

<template>
  <div style='display: flex;flex-direction: row;'>
    <div class='room-info'>
      <div style='display:flex;flex-direction: row;margin: 15px'>
        <strong style='color: white'>病房信息</strong>
        <el-select class='select-form' style='margin-left: 45%;width: 30%;' v-model='filterValue'
                   placeholder='请选择科室'>
          <el-option v-for='item in filterOptions'
                     :key='item.value'
                     :label='item.label'
                     :value='item.value'
          >
          </el-option>
        </el-select>
      </div>
      <div style='overflow:scroll;height: 80vh'>
        <div v-for='(item,index) in roomList' :class="isactive === index ? 'roomCard': ''" @click='isactive = index'>
          <div style='display: flex;flex-direction: row;'>
            <p style='max-width: 160px;height: 20px;overflow: hidden;font-size: 14px ;color: white'>{{ item.roomLev }}&ensp;{{ item.roomID
              }}</p>
            <p style='max-width: 80px;height: 20px;overflow: hidden;margin-left: 42%;font-size: 14px ;color: #a2a1a7;'>
              {{ item.roomNurse }}</p>
          </div>
          <div style='display: flex;flex-direction: row;margin-bottom: 15px'>
            <div v-for='index in item.roomBeds.length' class='fullBed'>
            </div>
            <div v-for='index in (6-item.roomBeds.length)' class='restBed'>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='patient-info'>
      <div style='margin: 15px'>
        <strong style='color:white;'>患者信息</strong>
      </div>
      <div style='margin: 15px;overflow: scroll;height: 80vh'>
        <div v-for='item in roomList[isactive].roomBeds' class='inUseBed'>
          <el-col :span='5' style='padding: 2%;background-color: #604085'>
            <h3>{{ item.bedID }}</h3>
            <br>
            <p style='color: #a2a1a7'>{{ item.bedInTime }}</p>
            <br>
            <p>{{ item.patientName }}</p>
            <br>
            <p>{{ item.bedDays }}</p>
            <br>
          </el-col>
          <el-col :span='18' style='padding: 2%;background-color: #20252a'>
            <table style='width: 100%;text-align: justify;'>
              <tr>
                <td>患者病情<label style='color: #a2a1a7;margin-left: 5%'>{{ item.patientName }}</label>
                </td>
              </tr>
              <br>
              <tr>
                <td>患者状态<label style='color: #a2a1a7;margin-left: 5%'>{{ item.patientGender }}</label>
                </td>
              </tr>
              <br>
              <tr>
                <td>住院天数<label style='color: #a2a1a7;margin-left: 5%'>{{ item.patientAge }}</label>
                </td>
              </tr>
            </table>
            <br>
          </el-col>
          <el-col :span='1' style='background-color: #604085'>
            <el-row style='justify-content: center;margin-top: 100px'>
              <el-icon class='more_icon'></el-icon>
            </el-row>
          </el-col>
        </div>
        <div v-for='idx in (6-roomList[isactive].roomBeds.length)' class='unUSeBed'>
          <h3>{{ idx + roomList[isactive].roomBeds.length }}号床</h3>
          <el-button @click='dialogVisible = true' class='AddButton' size='large' round>添加患者</el-button>
        </div>
        <el-dialog
          v-model='dialogVisible'
          title='添加患者'
          width='40%'
        >
          <table>
            <tr>
              <td>患者姓名</td>
              <td><input v-model='patientToAdd.name'></td>
              <td>患者病情</td>
              <td><input v-model='patientToAdd.illness'></td>
            </tr>
            <tr>
              <td>患者状态</td>
              <td><input v-model='patientToAdd.state'></td>
              <td>住院天数</td>
              <td><input v-model='patientToAdd.days'></td>
            </tr>
          </table>
          <template #footer>
      <span class='dialog-footer'>
        <el-button @click='dialogVisible = false'>取消</el-button>
        <el-button type='primary' @click='addPatient(); dialogVisible=false'>
          确认
        </el-button>
      </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<style>
.select-form {
  .el-input {
    --el-input-text-color: white;
    --el-input-bg-color: rebeccapurple;
    --el-input-border-color: transparent;
  }
}
</style>
<style scoped lang='scss'>
.AddButton {
  background-color: #cccccc;
  color: white;
  margin-top: 10px;
  margin-right: 9px;
}

.inUseBed {
  display: flex;
  flex-direction: row;
  border: 2px solid #a2a1a7;
  margin-top: 2%;
  border-radius: 8px;
  width: 55vw;
  background-color: #20252a;
  color: white;

  p {
    margin: 0;
  }

  h3 {
    margin: 0;
  }

  .more_icon {
    background: url('../../assets/imgs/more.png');
    background-size: 16px;
  }
}

.unUSeBed {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
  width: 55vw;
  border: 2px solid #a2a1a7;
  border-radius: 8px;

  h3 {
    color: white;
    margin-left: 15px;
  }
}

.roomCard {
  background-color: #604085;
  border: 2px solid #a2a1a7;
  border-radius: 15px;
  margin-bottom: 5px;
}

.fullBed {
  width: 40px;
  height: 30px;
  margin: 5px;
  background: #ccc;
  border-radius: 3px;

}

.restBed {
  width: 40px;
  height: 30px;
  margin: 5px;
  background: #323233;
  border-radius: 3px;
}

.room-info {
  height: 87vh;
  border-radius: 15px;
  background-color: #20252a;
}

.patient-info {
  margin-left: 15px;
  height: 87vh;
  border-radius: 15px;
  background-color: #20252a;
}
</style>