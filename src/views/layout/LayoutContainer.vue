<script setup>
import {
  User,
  Search,
  Setting,
  Sunny,
  House,
  FolderAdd,
  BellFilled
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const input = ref('')
const $route = useRoute()
</script>

<template>
  <el-container class="layout-container">
    <el-aside>
      <el-header>
        <div class="title">
          <img class="tooth" src="../../assets/imgs/tooth.png" />
          <span style="text-align: right">
            <h3 style="margin-bottom: 10px; margin-top: 8px">口腔检查系统</h3>
            <h5 style="margin: 0">Oral examination system</h5>
          </span>
        </div>
      </el-header>
      <el-menu
        text-color="white"
        active-text-color="white"
        router
        :default-active="$route.path"
      >
        <el-menu-item index="1">
          <el-icon>
            <House />
          </el-icon>
          <span>首页概况</span>
        </el-menu-item>
        <el-menu-item index="/admin/patient">
          <el-icon>
            <User />
          </el-icon>
          <span>患者信息</span>
        </el-menu-item>
        <el-menu-item index="/admin/doctor">
          <el-icon>
            <User />
          </el-icon>
          <span>医生信息</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <FolderAdd />
          </el-icon>
          <span>病房信息</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="main-header">
        <el-input
          class="inpu"
          v-model="input"
          placeholder="患者名称/药品编号/医生名称/病房号"
          :prefix-icon="Search"
        ></el-input>
        <el-button circle>
          <el-icon>
            <Sunny />
          </el-icon>
        </el-button>
        <el-button circle>
          <el-icon>
            <Setting />
          </el-icon>
        </el-button>
        <el-button circle>
          <el-icon>
            <BellFilled />
          </el-icon>
        </el-button>
        <div class="user">
          <span class="user-name">管理端</span>
          <el-avatar
            class="user-avatar"
            size="100"
            style="float: right"
            shape="circle"
            src="src/assets/imgs/avatar.png"
          />
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.inpu {
  --el-input-border-radius: 10px;
  --el-input-bg-color: white;
  --el-input-text-color: black;
  --el-input-placeholder-color: rgb(197, 197, 197);
}
</style>
<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  margin-top: -10px;
  margin-bottom: -10px;

  .el-aside {
    background-color: rgb(154, 142, 167);
    margin-left: -20px;
  }

  .el-menu {
    border-right: none;
  }

  .el-main {
    background-color: #604085;
  }

  .main-header {
    background-color: black;
  }

  .el-menu {
    background-color: rgb(154, 142, 167);
  }

  .el-menu-item {
    // width: 80%;
    align-content: center;
    background-color: black;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 20px;
    text-align: center;
  }

  .el-menu-item.is-active {
    background-color: #604085;
  }

  h3 {
    color: white;
  }

  h5,
  h4 {
    color: white;
  }

  .inpu {
    margin-top: 15px;
    width: 60%;
  }

  .el-button {
    margin-top: 15px;
    margin-left: 10px;
    background-color: #604085;
    border: none;

    .el-icon {
      color: rgb(139, 131, 156);
      font-size: 20px;
    }
  }

  .tooth {
    float: left;
    width: 60px;
    height: 65px;
    object-fit: scale-down;
    vertical-align: middle;
  }

  .user {
    float: right;
    color: white;
    // text-align: right;
    margin-right: 30px;
    margin-top: 15px;
    vertical-align: bottom;
  }

  .user-name {
    vertical-align: middle;
  }

  .user-avatar {
    margin-left: 20px;
    margin-top: -5px;
  }
}
</style>
