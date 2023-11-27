<script setup>
import TitleBar from '../../../components/TitleBar.vue'
import router from '@/router'
import { ref } from 'vue'

const backPage = () => {
  router.go(-1)
}

const patient_props = ref([
  '患者姓名',
  '患者性别',
  '患者年龄',
  '患者民族',
  '患者电话',
  '社保卡号'
])
const patient_value = ref([
  '王麻',
  '男',
  '46',
  '汉族',
  '15800001234',
  '1140001140001'
])
</script>

<template>
  <div style="height: 100vh; background: #604085">
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
    <div class="container">
      <div class="left-container">
        <div class="image_container" style="position: relative">
          <div class="edit_tool">
            <Edit style="color: white" />
            <Crop style="margin-top: 5px; color: white" />
            <EditPen style="margin-top: 5px; color: white" />
            <Scissor style="margin-top: 5px; color: white" />
          </div>
          <div style="display: flex; justify-content: flex-end">
            <el-button
              style="
                border: 0;
                font-weight: bold;
                background-color: gray;
                color: white;
              "
              round
              >上传
            </el-button>
          </div>
          <div class="image_large">
            <img
              v-for="index in 2"
              class="detect_image"
              src="../../assets/imgs/img1.png"
              :key="index"
            />
          </div>
        </div>
        <div class="nii_container">
          <img
            v-for="(item, index) in 3"
            :key="index"
            class="nii_imgs"
            src="../../assets/imgs/img2.png"
          />
        </div>
      </div>
      <div class="right-container">
        <div style="display: flex; justify-content: space-between">
          <div style="color: white; font-weight: bold">患者信息</div>
          <button style="background-color: transparent; border: 0">
            <img
              style="background-color: #604085; width: 12px; height: auto"
              src="../../assets/imgs/revise.png"
            />
          </button>
        </div>
        <img
          style="width: 100px; height: 120px; margin: 30px 0"
          src="../../assets/imgs/patient-image.png"
        />
        <table style="color: white; margin-top: 20px; border-spacing: 10px">
          <tr v-for="item in 7" :key="item">
            <td>{{ patient_props[item - 1] }}</td>
            <td>{{ patient_value[item - 1] }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  margin: 15px 4vw 0 12vw;
  height: 75vh;

  .left-container {
    flex: 1;
    .image_container {
      padding: 20px;
      display: flex;
      flex-direction: column;
      background-color: #20252a;
      border-radius: 10px;
      margin-bottom: 10px;

      .edit_tool {
        width: 20px;
        position: absolute;
        left: 10px;
        top: 10px;
      }
      .image_large {
        display: flex;
        justify-content: center;
      }
    }

    .nii_container {
      display: flex;
      justify-content: space-around;
    }
  }
}
.right-container {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border-top: 10px;
  margin-left: 5%;
  width: 20vw;
  padding: 20px;
  background-color: #20252a;
}
.backButton {
  font-weight: bolder;
  margin-top: 1.5%;
  margin-left: 35%;
}
.detect_image {
  width: 20vw;
  height: 20vw;
}
.nii_imgs {
  width: 16vw;
}
@media screen and (max-width: 1000px) {
  .container {
    margin-left: 4vw;
  }
  .right-container {
    display: none; /* 隐藏组件 */
  }
  .detect_image {
    width: 35vw;
    height: 35vw;
  }
  .nii_imgs {
    width: 25vw;
    height: 25vw;
  }
}
</style>
