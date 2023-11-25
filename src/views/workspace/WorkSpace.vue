<script setup>
import { ref } from 'vue'
import { Document, Operation } from '@element-plus/icons-vue'
import TitleBar from '../../../components/TitleBar.vue'

var doctorName = ref('刘强')
var doctorDuty = ref('口腔全科-主任医师')
var doctor = ref({
  '医生姓名': doctorName,
  '医生性别': '男',
  '医生年龄': '32',
  '出生日期': '1991-09-08',
  '所在科室': '口腔全科',
  '等级职称': '主任医师'
})
var patientNum = ref(12)
const surgeryLists = ref([{
  surgeryName: '口腔内肿瘤手术',
  date: '2023-10-13-10:00',
  dueTime: '预计5小时',
  surgeryRoom: '手术室506',
  duty: '主刀',
  patientName: '张三',
  patientGender: '男',
  patientAge: '54',
  patientBlood: 'B',
  pastMedicalHistory: '无',
  chronicMedicalHistory: '无',
  drugAllergy: '无',
  adverseReaction: '无',
  preEvaluation: '中风险',
  preExamination: '合格'
},
  {
    surgeryName: '口腔内肿瘤手术',
    date: '2023-10-13-10:00',
    dueTime: '预计5小时',
    surgeryRoom: '手术室506',
    duty: '主刀',
    patientName: '张三',
    patientGender: '男',
    patientAge: '54',
    patientBlood: 'B',
    pastMedicalHistory: '无',
    chronicMedicalHistory: '无',
    drugAllergy: '无',
    adverseReaction: '无',
    preEvaluation: '中风险',
    preExamination: '合格'
  },
  {
    surgeryName: '口腔内肿瘤手术',
    date: '2023-10-13-10:00',
    dueTime: '预计5小时',
    surgeryRoom: '手术室506',
    duty: '主刀',
    patientName: '张三',
    patientGender: '男',
    patientAge: '54',
    patientBlood: 'B',
    pastMedicalHistory: '无',
    chronicMedicalHistory: '无',
    drugAllergy: '无',
    adverseReaction: '无',
    preEvaluation: '中风险',
    preExamination: '合格'
  }])
const filterValue = ref('')
const filterOptions = [
  {
    value: 'option1',
    label: '条件1'
  },
  {
    value: 'option2',
    label: '条件2'
  }]
const patients = ref([
  {
    name: '张三',
    num: '186000000001',
    type: '口腔内科'
  }, {
    name: '张三',
    num: '186000000001',
    type: '口腔内科'
  }, {
    name: '张三',
    num: '186000000001',
    type: '口腔内科'
  }, {
    name: '张三',
    num: '186000000001',
    type: '口腔内科'
  }, {
    name: '张三',
    num: '186000000001',
    type: '口腔内科'
  }])
</script>

<template>
  <div class='page'>
    <title-bar></title-bar>
    <div class='body'>
      <div class='doctor-card'>
        <div style='color: white;margin-left: 22px;'>
          <br>
          <strong>医生信息</strong>
          <img style='margin-left: 65%;background-color: #604085;width: 10px;height: auto'
               src='../../assets/imgs/revise.png'>
        </div>
        <div class='doctor-info' style='margin-left: 15px;margin-top: 20px'>
          <img class='doctor-picture' src='../../assets/imgs/doctor-picture.png'>
          <p style='overflow: scroll' class='introduction'>个人简介<br><br>
            口腔全科医生，掌握口腔医学各学科知识与基本能力，擅长牙体牙髓常见病疑难病诊断治疗,显微根管治疗,牙齿美白美容修复。
          </p>
        </div>
        <div class='doctor-info-table'>
          <table cellpadding='7px' class='basic-info'>
            <tr>
              <td style='color:#a2a1a7;'>医生姓名</td>
              <td style='color: white'>{{ doctor.医生姓名 }}</td>
              <td style='color:#a2a1a7;'>医生性别</td>
              <td style='color: white'>{{ doctor.医生性别 }}</td>
            </tr>
            <tr>
              <td style='color:#a2a1a7;'>出生日期</td>
              <td style='color: white'>{{ doctor.出生日期 }}</td>
              <td style='color:#a2a1a7;'>医生年龄</td>
              <td style='color: white'>{{ doctor.医生年龄 }}</td>
            </tr>
            <tr>
              <td style='color:#a2a1a7;'>所在科室</td>
              <td style='color: white'>{{ doctor.所在科室 }}</td>
              <td style='color:#a2a1a7;'>等级职称</td>
              <td style='color: white'>{{ doctor.等级职称 }}</td>
            </tr>
          </table>
        </div>
        <div class='table-title'>
        <p style='width: 4vw;overflow: hidden' class='table-list'>患者姓名</p>
        <p style='margin-left: 8%;width: 4vw;overflow: hidden' class='table-list'>手机号码</p>
        <p style='margin-left: 15%;overflow: hidden;width: 5vw;margin-bottom: 0px' class='table-list'>挂号类别</p>
      </div>
        <div class='patient-list'>
          <div style='margin-left: 5%;display: flex;flex-direction: row' v-for='item in patients'>
            <div class='table-list'>{{ item.name }}</div>
            <div style='margin-left: 15%;width: 6vw;overflow: hidden' class='table-list'>{{ item.num }}</div>
            <div style='margin-left: 10%;width: 4vw;overflow: hidden' class='table-list'>{{ item.type }}</div>
          </div>
        </div>
      </div>
      <div class='surgery-list'>
        <div><br><strong>今日手术列表</strong></div>
        <br>
        <el-row
          style='float: left;text-align: center;width: 15%;border-radius: 8px;padding: 0.5%;background-color: #604085'>
          患者人数
          <div style='margin-left: 1vw;border-radius: 5px;width: 30%;background-color: #20252a'>{{ patientNum }}</div>
        </el-row>
        <div class='filter-select'>
          <el-select popper-class='select-form' style='background-color: #604085' v-model='filterValue'
                     placeholder='请选择筛选条件'>
            <template #prefix>
            <span style='padding-left: 5px;'> <el-icon>
              <Operation></Operation>
            </el-icon> </span>
            </template>
            <el-option v-for='item in filterOptions'
                       :key='item.value'
                       :label='item.label'
                       :value='item.value'
            >
            </el-option>
          </el-select>
        </div>
        <br>
        <div class='surgery-info'>
          <div v-for='item in surgeryLists' class='surgery-card' style='display: flex;flex-direction: row'>
            <el-col :span='5' style='padding: 2%;background-color: #604085'>
              <h3>{{ item.surgeryName }}</h3>
              <br>
              <p>{{ item.date }}</p>
              <br>
              <p>{{ item.dueTime }}</p>
              <br>
              <p style='color: white'>{{ item.surgeryRoom }}</p>
              <br>
              <p style='color: white'> {{ item.duty }}</p>
            </el-col>
            <el-col :span='18' style='padding: 2%;background-color: #20252a'>
              <table style='width: 100%;text-align: justify;'>
                <tr>
                  <td>患者姓名<label style='color: #a2a1a7;margin-left: 5%'>{{ item.patientName }}</label>
                  </td>
                  <td>既往病史<label style='color: #a2a1a7;margin-left: 5%'>{{
                      item.pastMedicalHistory
                    }}</label></td>
                  <td>术前评估<label style='margin-left: 5%'>{{ item.preEvaluation }}</label></td>
                </tr>
                <br>
                <tr>
                  <td>患者性别<label style='color: #a2a1a7;margin-left: 5%'>{{ item.patientGender }}</label>
                  </td>
                  <td>慢性病史<label style='color: #a2a1a7;margin-left: 5%'>{{
                      item.chronicMedicalHistory
                    }}</label></td>
                  <td>术前检查<label style='color: #a2a1a7;margin-left: 5%'>{{ item.preExamination }}</label>
                  </td>
                </tr>
                <br>

                <tr>
                  <td>患者年龄<label style='color: #a2a1a7;margin-left: 5%'>{{ item.patientAge }}</label>
                  </td>
                  <td>药物过敏<label style='color: #a2a1a7;margin-left: 5%'>{{
                      item.pastMedicalHistory
                    }}</label></td>
                  <td>
                    <el-button size='large' type='warning' plain>诊断报告</el-button>
                  </td>
                </tr>
                <br>
                <tr>
                  <td>患者血型<label style='color: #a2a1a7;margin-left: 5%'>{{ item.patientBlood }}</label>
                  </td>
                  <td>不良反应<label style='color: #a2a1a7;margin-left: 5%'>{{
                      item.adverseReaction
                    }}</label></td>
                </tr>
              </table>
              <br>
              <el-row style='overflow:scroll;'>
                <el-button size='large' type='warning' :icon='Document' plain>患者病历.pdf</el-button>
                <el-button size='large' type='warning' :icon='Document' plain>术前完整报告.pdf</el-button>
                <el-button size='large' type='warning' :icon='Document' plain>麻醉知情同意书.pdf</el-button>
              </el-row>
            </el-col>
            <el-col :span='1' style='background-color: #604085'>
              <el-row style='justify-content: center;margin-top: 120px'>
                <el-icon class='more_icon'></el-icon>
              </el-row>
            </el-col>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
<style scoped>
.el-input {
  --el-input-text-color: white;
  --el-input-border-color: #604085;
  --el-input-bg-color: #604085;
  --el-input-placeholder-color: white;
  --el-input-width: 100%;
}
</style>
<style scoped>

.more_icon {
  background: url('../../assets/imgs/more.png');
  background-size: 16px;
}

.surgery-card {
  border: 2px solid #a2a1a7;
  margin-top: 2%;
  border-radius: 8px;
  width: 99%;
  background-color: #20252a;

}
.surgery-card h3 {
  margin: 0;
}

.surgery-card p {
  margin: 0;
  color: #a2a1a7;
}

.surgery-info {
  margin-top: 2vh;
  width: 100%;
  overflow-y: scroll;
  height: 65vh;
}


.doctor-info-table {
  height: 250px;
  width: 22vw;
  overflow: hidden;
}

.body {
  display: flex;
  flex-direction: row;
}

.filter-select {
  width: 10vw;
  border-radius: 20px;
  text-align: center;
  float: right;
}

.surgery-list {
  color: white;
  padding: 1px 1% 1%;
  border-radius: 8px;
  border-top: 10px;
  margin-top: 1%;
  margin-left: 5%;
  width: 60%;
  height: 90%;
  background-color: #20252a;
}

body {
  display: flex;
  flex-direction: row;

}

p {
  font-size: 14px;
}

.patient-list {
  background-color: #20252a;
  text-align: center;
  color: white;
  margin: 1vh;
  overflow-y: scroll;
}

td {
  font-size: 14px;
}

.basic-info {
  margin-left: 10px;
  margin-top: 20px;
  height: 20%;
}

.table-list {
  margin: 8px 8px 2px;
  height: 6vh;
  font-size: 14px;
  text-align: left;
}

.table-title {
  margin: 10px 10px 10px 17px;
  display: flex;
  flex-direction: row;
  background-color: #604085;
  color: white;
  height: 5vh;
  border-radius: 12px 12px 0px 0px;
}

.doctor-picture {
  border-radius: 8px;
  margin-left: 8px;
  width: 20vw;
  height: 20vh;
}

.el-table tbody tr:hover > td {
  background-color: transparent !important;
}

.page {
  background-color: #604085;
  height: 97vh;
  overflow-y: scroll;
}

.doctor-info {
  color: #a2a1a7;
  display: flex;
  flex-direction: row;
}

.introduction {
  height: 20vh;
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px
}

.doctor-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border-top: 10px;
  margin-top: 1%;
  margin-left: 5%;
  width: 24%;
  height: 80vh;
  background-color: #20252a;
}

header {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #20252a;
  height: 12%;
}

.user span {
  display: inline-block;
  vertical-align: middle;
}

.title span {
  display: inline-block;
  vertical-align: middle;
}

.title span h3 {
  margin: 0;
  border: 0;
}
</style>