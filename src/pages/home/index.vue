<script setup>
import {ref} from "vue";

var doctorName = ref('刘强')
var doctorDuty = ref('口腔全科-主任医师')
var doctor = ref({
  "医生姓名": doctorName,
  "医生性别": '男',
  "医生年龄": '32',
  "出生日期": '1991-09-08',
  "所在科室": '口腔全科',
  "等级职称": '主任医师'
})
const surgeryLists = ref([{
  surgeryName:'口腔内肿瘤手术',
  data:'2023-10-13-10:00',
  dueTime:'预计5小时',
  surgeryRoom:'手术室506',
  duty:'主刀',
  patientName:'张三',
  patientGender:'男',
  patientAge:'54',
  patientBlood:'B',
  pastMedicalHistory:'无',
  chronicMedicalHistory:'无',
  drugAllergy:'无',
  adverseReaction:'无',
  preEvaluation:'中风险',
  preExamination:'合格'
}])
const patients = ref([{
  name: "张三",
  num: '186000000001',
  type: "口腔内科"
}, {
  name: "张三",
  num: '186000000001',
  type: "口腔内科"
}, {
  name: "张三",
  num: '186000000001',
  type: "口腔内科"
}, {
  name: "张三",
  num: '186000000001',
  type: "口腔内科"
},{
  name: "张三",
  num: '186000000001',
  type: "口腔内科"
}])
</script>

<template>
  <div class="page">
    <header>
      <div class="title">
        <img class="tooth" src="../../assets/imgs/tooth.png">
        <span>
       <h3 style="margin-bottom: 10px;margin-top: 8px">口腔检查系统</h3>
       <h4 style="margin: 0">Oral examination system</h4>
      </span>
      </div>
      <div class="user">
      <span style="text-align: right;">
       <h4 style="margin-top: 15px;margin-bottom: 0">{{ doctorName }}</h4>
       <p style="margin: 0;font-size: 10px;color: #a2a1a7">{{ doctorDuty }}</p>
      </span>
        <el-avatar class="user-avatar" size="120" style="float:right;" shape="circle" src="src/assets/imgs/avatar.png"
        />
      </div>
    </header>

    <div class="doctor-card">
      <div style="color: white;margin-left: 22px;">
        <br>
        <strong>医生信息</strong>
        <img style="margin-left: 65%;background-color: #604085;width: 10px;height: auto"
             src="../../assets/imgs/revise.png">
      </div>
      <div class="doctor-info" style="margin-left: 15px;margin-top: 20px">
        <img class="doctor-picture" src="../../assets/imgs/doctor-picture.png">
        <p class="introduction">个人简介<br><br>
          口腔全科医生，掌握口腔医学各学科知识与基本能力，擅长牙体牙髓常见病疑难病诊断治疗,显微根管治疗,牙齿美白美容修复。
        </p>
      </div>
      <table cellpadding="7px" class="basic-info">
        <tr >
          <td style="color:#a2a1a7;">医生姓名</td>
          <td style="color: white">{{doctor.医生姓名}}</td>
          <td style="color:#a2a1a7;">医生性别</td>
          <td style="color: white">{{ doctor.医生性别 }}</td>
        </tr>
        <tr >
          <td style="color:#a2a1a7;">出生日期</td>
          <td style="color: white">{{doctor.出生日期}}</td>
          <td style="color:#a2a1a7;">医生年龄</td>
          <td style="color: white">{{ doctor.医生年龄 }}</td>
        </tr>        <tr >
        <td style="color:#a2a1a7;">所在科室</td>
        <td style="color: white">{{doctor.所在科室}}</td>
        <td style="color:#a2a1a7;">等级职称</td>
        <td style="color: white">{{ doctor.等级职称 }}</td>
      </tr>
      </table>
      <div class="table-title">
        <p class="table-list">患者姓名</p>
        <p style="margin-left: 8%" class="table-list">手机号码</p>
        <p style="margin-left: 20%;margin-bottom: 0px" class="table-list">挂号类别</p>
      </div>
      <div class="patient-list">
        <div style="margin-left: 5px;display: flex;flex-direction: row" v-for="item in patients">
          <div class="table-list">{{ item.name }}</div>
          <div style="margin-left: 15%" class="table-list">{{ item.num }}</div>
          <div style="margin-left: 10%" class="table-list">{{ item.type }}</div>
        </div>
      </div>
    </div>
    <div class=""></div>
  </div>

</template>
<style scoped>
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
  margin: 10px;
  height: 220px;
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
  height: 40px;
  font-size: 14px;
}


.table-title {
  margin: 10px 10px 10px 17px;
  display: flex;
  flex-direction: row;
  background-color: #604085;
  color: white;
  height: 40px;
  border-radius: 12px 12px 0px 0px;
}

.doctor-picture {
  border-radius: 8px;
  margin-left: 8px;
  width: 120px;
  height: 120px;
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
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px
}

.doctor-card {
  border-radius: 8px;
  border-top: 10px;
  margin-top: 1%;
  margin-left: 5%;
  width: 24%;
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


.user-avatar {
  margin: 12px;

}

.title {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5%;
  color: white;
  width: 50%;
}

.user {
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  margin-left: auto;
}

.tooth {
  float: left;
  width: 60px;
  height: 65px;
  object-fit: scale-down;
  vertical-align: middle;
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