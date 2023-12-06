<script setup>
import { ref } from 'vue'
import { userhandleAdd, userhandleEdit } from '@/api/user.js'
import { Plus } from '@element-plus/icons-vue'
const dialogVisible = ref(false)
const formRef = ref()
const formModel = ref({
  name: '',
  age: 1,
  gender: '',
  phone: '',
  job: '',
  avatar: '',
  profile: '',
  birthday: '',
  office: '',
  deptId: 0
})
const rules = {
  name: [
    { required: true, message: '请输入医生名字', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '医生名必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  age: [
    { required: true, message: '请输入医生年龄', trigger: 'blur' },
    {
      pattern: /^[0-9]{1,15}$/,
      message: '年龄必须在-2147483648到2147483648之间',
      trigger: 'blur'
    }
  ],
  gender: [
    { required: true, message: '请输入医生性别', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '医生性别必须是 1-10 位的非空字符',
      trigger: 'blur'
    }
  ],
  phone: [
    { required: true, message: '请输入医生联系方式', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '医生名必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  job: [
    { required: true, message: '请输入医生职称·', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '医生职称必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  avatar: [
    { required: true, message: '请输入医生名字', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '医生名必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  profile: [
    { required: true, message: '请输入医生名字', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '医生名必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  birthday: [
    { required: true, message: '请输入医生出生日期', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '医生出生日期必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  office: [
    { required: true, message: '请输入医生办公室', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '医生办公室必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  deptId: [
    { required: true, message: '请输入科室Id', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: 'Id必须是数字',
      trigger: 'blur'
    }
  ]
}

const emit = defineEmits(['success'])
const handleAvatarSuccess = (res) => {
  formModel.value.avatar = res
}
const handleProfileSuccess = (res) => {
  formModel.value.profile = res
}
const onSubmit = async () => {
  await formRef.value.validate()
  const isEdit = formModel.value.id
  if (isEdit) {
    await userhandleEdit(formModel.value)
    ElMessage.success('编辑成功')
  } else {
    await userhandleAdd(formModel.value)
    ElMessage.success('添加成功')
  }
  dialogVisible.value = false
  emit('success')
}

const open = (row) => {
  dialogVisible.value = true
  formModel.value = { ...row } // 添加 → 重置了表单内容，编辑 → 存储了需要回显的数据
}

// 向外暴露方法
defineExpose({
  open
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="formModel.id ? '编辑医生' : '添加医生'"
    width="30%"
  >
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="rules"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="医生名字" prop="name">
        <el-input
          v-model="formModel.name"
          placeholder="请输入医生名字"
        ></el-input>
      </el-form-item>
      <el-form-item label="医生年龄" prop="age">
        <el-input
          v-model="formModel.age"
          placeholder="请输入医生年龄"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input
          v-model="formModel.gender"
          placeholder="请输入医生性别"
        ></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input
          v-model="formModel.phone"
          placeholder="请输入医生联系方式"
        ></el-input>
      </el-form-item>
      <el-form-item label="职称" prop="job">
        <el-input
          v-model="formModel.job"
          placeholder="请输入医生职称"
        ></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <el-upload
          class="avatarprof-uploader"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img
            v-if="formModel.avatar"
            :src="formModel.avatar"
            class="avatarprof"
          />
          <el-icon v-else class="avatarprof-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="简历" prop="profile">
        <el-upload
          class="avatarprof-uploader"
          :action="'http://localhost:5173/file/upload'"
          :show-file-list="false"
          :on-success="handleProfileSuccess"
        >
          <img
            v-if="formModel.profile"
            :src="formModel.profile"
            class="avatarprof"
          />
          <el-icon v-else class="avatarprof-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-input
          v-model="formModel.birthday"
          placeholder="请输入出生日期"
        ></el-input>
      </el-form-item>
      <el-form-item label="办公室" prop="office">
        <el-input
          v-model="formModel.office"
          placeholder="请输入医生办公室"
        ></el-input>
      </el-form-item>
      <el-form-item label="科室id" prop="depId">
        <el-input
          v-model="formModel.deptId"
          placeholder="请输入科室Id"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style scoped>
.avatarprof-uploader .avatarprof {
  width: 140px;
  height: 150px;
  display: block;
}
</style>
<style>
.avatarprof-uploader {
  text-align: left;
  padding-bottom: 10px;
}
.avatarprof .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatarprof-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatarprof-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 108px;
  height: 108px;
  line-height: 138px;
  text-align: center;
}
</style>
