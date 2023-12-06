<script setup>
import { ref } from 'vue'
import { patienthandleAdd, patienthandleEdit } from '@/api/patient.js'
const dialogVisible = ref(false)
const formRef = ref()
const formModel = ref({
  name: '',
  gender: '',
  age: 1,
  phone: '',
  blood: '',
  ssCard: '',
  profile: '',
  deptId: 0,
  type: '',
  fee: 10
})
const rules = {
  name: [
    { required: true, message: '请输入患者名字', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '患者名必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  age: [
    { required: true, message: '请输入患者年龄', trigger: 'blur' },
    {
      pattern: /^[0-9]{1,15}$/,
      message: '年龄必须在-2147483648到2147483648之间',
      trigger: 'blur'
    }
  ],
  gender: [
    { required: true, message: '请输入患者性别', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '医生性别必须是 1-10 位的非空字符',
      trigger: 'blur'
    }
  ],
  phone: [
    { required: true, message: '请输入患者联系方式', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '患者联系方式必须是 1-50 位的非空字符',
      trigger: 'blur'
    }
  ],
  blood: [
    { required: true, message: '请输入血型', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '必须是 1-10 位的非空字符',
      trigger: 'blur'
    }
  ],
  ssCard: [
    { required: true, message: '请输入社保卡号', trigger: 'blur' },
    {
      pattern: /^\S{1,50}$/,
      message: '社保卡号必须是 1-50 位的非空字符',
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
const onSubmit = async () => {
  await formRef.value.validate()
  const isEdit = formModel.value.id
  if (isEdit) {
    await patienthandleEdit(formModel.value)
    ElMessage.success('编辑成功')
  } else {
    await patienthandleAdd(formModel.value)
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
    :title="formModel.id ? '编辑患者' : '添加患者'"
    width="30%"
  >
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="rules"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="名字" prop="name">
        <el-input v-model="formModel.name" placeholder="请输入名字"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input
          v-model="formModel.gender"
          placeholder="请输入性别"
        ></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="formModel.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input
          v-model="formModel.phone"
          placeholder="请输入联系方式"
        ></el-input>
      </el-form-item>
      <el-form-item label="血型" prop="blood">
        <el-input v-model="formModel.blood" placeholder="请输入血型"></el-input>
      </el-form-item>
      <el-form-item label="社保卡号" prop="ssCard">
        <el-input
          v-model="formModel.ssCard"
          placeholder="请输入社保卡号"
        ></el-input>
      </el-form-item>
      <el-form-item label="科室id" prop="depId">
        <el-input
          v-model="formModel.deptId"
          placeholder="请输入科室Id"
        ></el-input>
      </el-form-item>
      <el-form-item label="挂号类型" prop="type">
        <el-input
          v-model="formModel.type"
          placeholder="请输入挂号类型"
        ></el-input>
      </el-form-item>
      <el-form-item label="挂号费" prop="fee">
        <el-input v-model="formModel.fee" placeholder="请输入挂号费"></el-input>
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
