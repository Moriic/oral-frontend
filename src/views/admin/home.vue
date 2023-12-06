<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'

let overallInfo = ref({
  '今日挂号人数': ref(400),
  '今日手术次数': ref(130),
  '今日门诊消息总额': ref(425558),
  '医生人数': ref(550)
})
let wardInfo = ref({
  'in': ref(37),
  'all': ref(48)
})
let operatingRoom = ref({
  'in': ref(24),
  'all': ref(32)
})
let wardDisplay = ref({
  'rowNum': ref(4),
  'colNum': ref(12)
})
let operatingRoomDisplay = ref({
  'rowNum': ref(4),
  'colNum': ref(8)
})
let operationInfo = ref([

  {
    'name': '口腔内肿瘤手术',
    'date': '2023-9-13-10:00',
    'surgery': '手术室506',
    'patient': '张三'
  },
  {
    'name': '口腔内肿瘤手术',
    'date': '2023-9-13-10:00',
    'surgery': '手术室506',
    'patient': '张三'
  },
  {
    'name': '口腔内肿瘤手术',
    'date': '2023-9-13-10:00',
    'surgery': '手术室506',
    'patient': '张三'
  },
  {
    'name': '口腔内肿瘤手术',
    'date': '2023-9-13-10:00',
    'surgery': '手术室506',
    'patient': '张三'
  }
])
import * as echarts from 'echarts'

let chartDom = ref(null) //注意变量名 和 ref名字要对应
onMounted(() => {
  initChart()
})

const initChart = () => {
  var myChart = echarts.init(chartDom.value)
  var option = {
    tooltip: {
      // 鼠标悬浮提示数据
      trigger: 'axis',
      backgroundColor: 'rgba(32, 33, 36,.7)',
      borderColor: 'rgba(32, 33, 36,0.20)',
      borderWidth: 15,
      textStyle: {
        // 文字提示样式
        color: '#fff',
        fontSize: '12'
      },
      axisPointer: {
        // 坐标轴虚线
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },

    // },
    grid: {
      // 控制图表的位置
      left: '5%',
      right: '5%',
      top: '18%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      axisLabel: {
        // X轴线 标签修改
        textStyle: {
          fontSize: '10'
        }
      },
      data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日']
    },
    yAxis: {
      axisLabel: {
        // y轴线 标签修改
        textStyle: {
          color: 'white' //坐标值得具体的颜色
        }
      }
    },
    series: [
      {
        data: [350, 300, 220, 341, 279, 318, 432],
        type: 'bar',
        barWidth: '20%', //调整柱状图宽度
        itemStyle: {
          normal: {
            /*--------设置柱形图圆角 [左上角，右上角，右下角，左下角]-------------*/
            borderRadius: [5, 5, 0, 0],
            /*--------设置柱形图渐变色 -------------*/
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#634387'
              },
              {
                offset: 1,
                color: '#95979a'
              }
            ])
          }
        }
      }
    ]
  }
  option && myChart.setOption(option)
}

</script>

<template>
  <div style='width: 75vw;height:100vh;display: flex;flex-direction: row'>
    <div class='left'>
      <div class='overall'>
        <div v-for='(key ,value) in overallInfo' style='text-align: center'>
          <div style='color: #a2a1a7'>{{ value }}</div>
          <div style='color: white;font-size: 30px'>{{ key }}</div>
        </div>
      </div>
      <div class='sickRoomInfo'>
        <div style='display: flex;justify-content: space-between'>
          <div style='color: white;font-size: 20px'>病房情况</div>
          <el-button
            style='
                border: 0;
                font-weight: bold;
                background-color: gray;
                color: white;
              '
            round
          >口腔外科
          </el-button>
        </div>
        <div class='resourceVisual'>
          <div class='inpatientWard'>
            <div style='color: #a2a1a7'>住院病房</div>
            <div style='color:white;font-size: 25px'>{{ wardInfo.in }}/{{ wardInfo.all }}</div>
            <div style='display: flex;flex-direction: row;margin-bottom: 15px'>
              <div style='display: flex;flex-direction: column'>
                <div v-for='index in wardDisplay.rowNum' style='display: flex;flex-direction: row'>
                  <div v-for='item in wardDisplay.colNum'>
                    <div @click='console.log()'
                         :class="((index - 1) * wardDisplay.colNum)+item <= wardInfo.in ? 'fullBed' : 'restBed'">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class='operatingRoom'>
            <div style='color: #a2a1a7'>手术室</div>
            <div style='color:white;font-size: 25px'>{{ wardInfo.in }}/{{ wardInfo.all }}</div>
            <div style='display: flex;flex-direction: row;margin-bottom: 15px'>
              <div style='display: flex;flex-direction: column'>
                <div v-for='index in operatingRoomDisplay.rowNum' style='display: flex;flex-direction: row'>
                  <div v-for='item in operatingRoomDisplay.colNum'>
                    <div
                      :class="((index - 1) * operatingRoomDisplay.colNum)+item <= operatingRoom.in ? 'fullBed' : 'restBed'">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class='registrationTrend'>
        <div style='display: flex;justify-content: space-between'>
          <div style='color: white;font-size: 20px'>挂号趋势</div>
          <el-button
            style='
                border: 0;
                font-weight: bold;
                background-color: gray;
                color: white;
              '
            round
          >口腔外科
          </el-button>
        </div>
        <div style='height: 30vh;' ref='chartDom'>
        </div>
      </div>
    </div>
    <div class='right'>
      <div style='display: flex;flex-direction: row'>
        手术信息
        <span
          style='background: #a2a1a7;color: black;border-radius: 15px;
          width: 20px;text-align: center;display:block;'>{{ operationInfo.length }}</span>
      </div>
      <div style='display: flex;flex-direction: column;overflow: scroll'>
        <div style='background: #604085;margin-top: 15px;padding: 5px;border-radius: 8px' v-for='item in operationInfo'>
          <div style='justify-content: space-between;font-size: 20px'>
            {{item.name}}
            <el-button style='background: transparent;border: 0;margin-left: 80px'>
              <img style='width: 15px' src='../../assets/imgs/more.png'>
            </el-button>
          </div>
          <div style='color: #cccccc;font-size: 15px'>{{item.date}}</div>
          <div style='font-size: 10px;color: #cccccc;margin-top: 10px'>
            <div style='float: left'>
              {{item.surgery}}
            </div>
            <div style='float: right'>
              患者姓名&emsp;{{item.patient}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.right {
  display: flex;
  flex-direction: column;
  color: white;
  background: #20252a;
  margin-left: 50px;
  padding: 20px;
  height: 728px;
  border-radius: 15px;
}

.resourceVisual {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;

  .operatingRoom {
    margin-left: 25px;
  }

  .fullBed {
    width: 25px;
    height: 25px;
    margin: 5px;
    background: #ccc;
    border-radius: 3px;

  }

  .restBed {
    width: 25px;
    height: 25px;
    margin: 5px;
    background: #6c6381;
    border-radius: 3px;
  }
}

.left {
  display: flex;
  flex-direction: column;
}

.overall {
  border-radius: 15px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  background: #20252a;
}

.registrationTrend {
  border-radius: 15px;
  padding: 25px;
  background: #20252a;
  margin-top: 20px;
}

.sickRoomInfo {
  border-radius: 15px;
  padding: 25px;
  margin-top: 20px;
  background: #20252a;
}
</style>