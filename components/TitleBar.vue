<script setup>

</script>

<template>
  <header>
    <div class="title">
      <img class="tooth" src="../src/assets/tooth.png">
      <span>
       <h3 style="margin-bottom: 10px;margin-top: 8px">口腔检查系统</h3>
       <h4 style="margin: 0">Oral examination system</h4>
      </span>
    </div>
    <slot>
      <div class="user">
      <span style="text-align: right;">
       <h4 style="margin-top: 15px;margin-bottom: 0">刘强</h4>
       <p style="margin: 0;font-size: 10px;color: #a2a1a7">口腔医科-主任医师</p>
      </span>
        <el-avatar class="user-avatar" size="200" style="float:right;" shape="circle" src="src/assets/imgs/avatar.png"
        />
      </div>
    </slot>
  </header>
</template>

<style scoped lang="scss">
.tooth {
  float: left;
  width: 60px;
  height: 65px;
  object-fit: scale-down;
  vertical-align: middle;
}
.user-avatar {
  margin: 12px;
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

</style>