<script setup>

</script>

<template>
  <header>
    <div class='title'>
      <img class='tooth' src='../src/assets/tooth.png'>
      <div >
        <h3 style='margin-bottom: 2vh;height: 4vh;overflow: hidden'>口腔检查系统</h3>
        <h4 style='margin: 0;height: 2vh;overflow: hidden'>Oral examination system</h4>
      </div>
    </div>
    <slot>
      <div class='user'>
      <span style='text-align: right;'>
       <h4 style='margin-top: 15px;margin-bottom: 0'>刘强</h4>
       <p style='margin: 0;font-size: 10px;color: #a2a1a7'>口腔医科-主任医师</p>
      </span>
        <el-avatar class='user-avatar' size='200' style='float:right;' shape='circle' src='src/assets/imgs/avatar.png'
        />
      </div>
    </slot>
  </header>
</template>

<style scoped lang='scss'>
.tooth {
  float: left;
  width: 6vw;
  height: 9vh;
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

.title div {
  display: inline-block;
  vertical-align: middle;
  height: 10px;
}

.title div h3 {
  font-size: 1.5vw;
  margin: 0;
  border: 0;
}

.title div h4 {
  font-size: 1vw;
  margin: 0;
  border: 0;
}

@media screen and (max-width: 700px) {
  .title div h3 {
    font-size: 3vw;
    margin: 0;
    border: 0;
  }
  .title div h4 {
    font-size: 2vw;
  }
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
