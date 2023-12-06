<template>
  <div style="height: 100vh; background: #604085">
    <title-bar>
      <el-button @click="backPage" class="backButton" size="large" round
        >返回</el-button
      >
    </title-bar>
    <div class="container">
      <div class="left-container">
        <div class="image_container" style="position: relative">
          <div class="edit_tool">
            <EditPen style="margin-top: 5px; color: white" />
            <Scissor style="margin-top: 5px; color: white" />
          </div>
          <div style="display: flex; justify-content: flex-end">
            <el-button
              round
              color="#9C9FA7"
              style="color: white; font-weight: bold"
              >上传</el-button
            >
            <el-button
              round
              color="#9C9FA7"
              style="color: white; font-weight: bold"
              >下载</el-button
            >
          </div>
          <div class="image_large">
            <img
              v-for="index in 2"
              class="detect_image"
              :src="large_image"
              :key="index"
            />
          </div>
        </div>
        <div class="nii_container">
          <div class="nii_edit" v-for="(item, index) in 3" :key="index">
            <div>
              <img
                class="nii_imgs"
                :class="'panzoom_' + index"
                :src="slide_path[index] + slide_now[index] + '.png'"
                @click="changeImage"
              />
            </div>
            <el-slider
              v-model="slide_now[index]"
              vertical
              placement="right"
              :max="slide_max[index]"
            />
            <div
              style="position: absolute; left: 1.5vw; bottom: 18px; width: 15px"
            >
              <RefreshRight
                style="margin-top: 5px; color: white"
                @click="reset(index)"
              />
              <ZoomIn
                style="margin-top: 5px; color: white"
                @click="zoomIn(index)"
              />
              <ZoomOut
                style="margin-top: 5px; color: white"
                @click="zoomOut(index)"
              />
            </div>
          </div>
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
        <table class="info-table">
          <tr v-for="item in 7" :key="item">
            <td>{{ patient_props[item - 1] }}</td>
            <td>{{ patient_value[item - 1] }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import TitleBar from '../../../components/TitleBar.vue'
import router from '@/router'
import { onMounted, reactive, ref } from 'vue'
import Panzoom from '@panzoom/panzoom'

const backPage = () => {
  router.push('/doctor')
}
// 响应式数据
const panzoomList = reactive([])

onMounted(() => {
  for (let i = 0; i < 3; i++) {
    let element = document.querySelector('.panzoom_' + i)
    panzoomList[i] = Panzoom(element, {})
    element.parentElement.addEventListener('wheel', (event) => {
      panzoomList[i].zoomWithWheel(event)
    })
  }
})

const zoomIn = (index) => {
  panzoomList[index].zoomIn()
}
const zoomOut = (index) => {
  panzoomList[index].zoomOut()
}
const reset = (index) => {
  panzoomList[index].reset()
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
const slide_now = ref([1, 2, 3])
const slide_max = ref([9, 9, 9])
const slide_path = ref([
  '/src/assets/nii/slice_x/slice_x_23',
  '/src/assets/nii/slice_y/slice_y_14',
  '/src/assets/nii/slice_z/slice_z_19'
])
const large_image = ref('/src/assets/nii/slice_z/slice_z_195.png')

const changeImage = ($event) => {
  large_image.value = $event.target.src
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  margin: 15px 4vw 0 12vw;
  height: 80vh;

  .left-container {
    flex: 1;
    .image_container {
      padding: 20px;
      display: flex;
      flex-direction: column;
      background-color: #20252a;
      border-radius: 10px;
      margin-bottom: 20px;

      .edit_tool {
        width: 20px;
        position: absolute;
        left: 10px;
        top: 10px;
      }
      .image_large {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
      }
    }

    .nii_container {
      display: flex;
      justify-content: space-around;
    }
  }
}
.nii_edit {
  background: #20252a;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 0 1vw;
  padding: 15px 1vw;
  position: relative;
  width: 17vw;
}
.right-container {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border-top: 10px;
  margin-left: 5%;
  width: 260px;
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
  width: 15vw;
  height: 15vw;
}

@media screen and (max-width: 1000px) {
  .container {
    display: block;
    width: 90vw;
    margin: 10px auto;
  }
  .right-container {
    display: none; /* 隐藏组件 */
  }
  .nii_edit {
    width: 30vw;
  }
  .detect_image {
    width: 35vw;
    height: 35vw;
  }
  .nii_imgs {
    width: 20vw;
    height: 20vw;
  }
}
.info-table {
  color: white;
  margin-top: 20px;
  border-spacing: 10px;
  width: 250px;
}

:deep .el-slider__bar {
  background-color: #604085;
}

:deep .el-slider__button {
  border: 2px solid #604085;
}
</style>
