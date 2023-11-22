<script setup>
import TitleBar from '../../../components/TitleBar.vue'
import { Back, Crop, Edit, EditPen, Scissor } from '@element-plus/icons-vue'
import router from '@/router'

const backPage = () => {
  router.go(-1)
}
</script>

<template>
  <div
    style="
      background-color: #604085;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    "
  >
    <title-bar>
      <el-button
        @click="backPage"
        class="backButton"
        size="large"
        :icon="Back"
        round
        >返回</el-button
      >
    </title-bar>
    <div class="body" style="display: flex; flex-direction: row; margin: 20px">
      <div style="width: 50%; margin-left: 5%">
        <el-container style="background-color: #20252a; border-radius: 10px">
          <el-aside width="2vw" style="margin-left: 15px; margin-top: 22px">
            <Edit style="color: white" />
            <Crop style="margin-top: 5px; color: white" />
            <EditPen style="margin-top: 5px; color: white" />
            <Scissor style="margin-top: 5px; color: white" />
          </el-aside>
          <el-main>
            <el-button
              style="
                width: 5vw;
                border: 0;
                font-weight: bold;
                font-size: 1vw;
                float: right;
                background-color: gray;
                color: white;
              "
              round
              >上传
            </el-button>
            <div
              class="image-Large"
              style="margin-top: 50px; margin-bottom: 20px"
            >
              <img style="width: 20vw" src="../../assets/imgs/img1.png" />
              <img style="width: 20vw" src="../../assets/imgs/img1.png" />
            </div>
          </el-main>
        </el-container>
        <div style="margin-top: 20px">
          <img style="width: 16vw" src="../../assets/imgs/img2.png" />
          <img
            style="margin: auto; width: 16vw"
            src="../../assets/imgs/img2.png"
          />
          <img style="width: 16vw" src="../../assets/imgs/img2.png" />
        </div>
      </div>
      <div class="patient-info">
        <div style="width: 100%; color: white; margin-left: 22px">
          <br />
          <strong>患者信息</strong>
          <button
            style="margin-left: 65%; background-color: transparent; border: 0"
          >
            <img
              style="background-color: #604085; width: 12px; height: auto"
              src="../../assets/imgs/revise.png"
            />
          </button>
        </div>
        <div style="margin-left: 15px; margin-top: 20px">
          <img
            style="width: 10vw; height: 20vh"
            src="../../assets/imgs/patient-image.png"
          />
        </div>
        <div style="height: 40vh; overflow: scroll">
          <table cellpadding="1vh" class="basic-info" style="width: 20vw">
            <tr>
              <td style="color: #a2a1a7">患者姓名</td>
              <td style="color: white">王麻</td>
            </tr>
            <tr>
              <td style="color: #a2a1a7">患者性别</td>
              <td style="color: white">男</td>
            </tr>
            <tr>
              <td style="color: #a2a1a7">患者年龄</td>
              <td style="color: white">46</td>
            </tr>
            <tr>
              <td style="color: #a2a1a7">患者民族</td>
              <td style="color: white">汉族</td>
            </tr>
            <tr>
              <td style="color: #a2a1a7">患者电话</td>
              <td style="color: white">12334567890</td>
            </tr>
            <tr>
              <td style="color: #a2a1a7">社保卡号</td>
              <td style="color: white">11400014000</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.backButton {
  font-size: 20px;
  font-weight: bolder;
  margin-top: 1.5%;
  margin-left: 35%;
}
table td {
  width: 2vw;
  overflow: scroll;
}
.patient-info {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border-top: 10px;
  margin-left: 5%;
  width: 24%;
  background-color: #20252a;
}
</style>
