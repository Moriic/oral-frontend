<script setup>
import { userLoginService } from '@/api/user.js'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
import {ElMessage} from "element-plus";

const form = ref()

// 整个的用于提交的form数据对象
const formModel = ref({
  account: '',
  password: ''
})

const rules = {
  account: [
    { required: true, message: '输入账号', trigger: 'blur' },
    {
      min: 1,
      max: 256,
      message: '账号必须是 小于256位 的字符',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{1,512}$/,
      message: '密码必须是 1-512位 的非空字符',
      trigger: 'blur'
    }
  ]
}

const userStore = useUserStore()
const router = useRouter()

const login = async () => {
  await form.value.validate()
  const res = await userLoginService(formModel.value)
  userStore.setToken(res.data.token)
  ElMessage.success('登录成功')
  router.push('/')
}
</script>

<template>
  <el-row class="login-page">
    <el-col :span="16" class="bg"></el-col>
    <el-col :span="2" class="mart"></el-col>
    <el-col :span="5" class="form">
      <div>
        <img src="@/assets/tooth.png" class="logo" />
      </div>
      <!-- 登录相关表单 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="default"
        autocomplete="off"
      >
        <el-form-item>
          <h1 style="color: white; font-size: 47px">口腔检查系统</h1>
        </el-form-item>
        <el-form-item>
          <h2 style="color: white">登录</h2>
        </el-form-item>
        <el-form-item class="inp" prop="account">
          <el-input
            v-model="formModel.account"
            placeholder="输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item class="inp" prop="password">
          <el-input
            v-model="formModel.password"
            name="password"
            type="password"
            placeholder="输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div style="width: 100%; text-align: right">
            <el-link
              :underline="false"
              href="#"
              style="font-size: 10px"
              >忘记密码
            </el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <div style="width: 100%; text-align: center">
            <el-button @click="login" class="button" type="info" round
              >登录</el-button
            >
          </div>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="1" class="loj"></el-col>
  </el-row>
</template>
<style>
.el-input {
  --el-input-text-color: white;
  --el-input-border-color: #604085;
  --el-input-bg-color: #604085;
  --el-input-placeholder-color: white;
  --el-input-width: 100%;
  border-bottom: 1px solid #fff;
}
</style>

<style scoped>
.login-page {
  height: 100vh;
  background-color: rgb(109, 100, 95);
}
.bg {
  background: url('@/assets/background.jpg') no-repeat right / cover;
  border-radius: 0;
}
.mart {
  border-radius: 35px 0 0 20px;
  background-color: #604085;
}
.logo {
  vertical-align: top;
  height: 100px;
  justify-content: space-between;
  align-items: center;
}
.loj {
  background-color: #604085;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  text-align: center;
  background-color: #604085;
}
.title {
  margin: 0 auto;
}
.button {
  margin: 0 auto;
}
.flex {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.el-link {
  color: #f7f6f6e1;
  font-size: 12px;
}
</style>
