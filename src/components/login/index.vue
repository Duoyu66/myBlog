<script setup lang="ts">

</script>

<template>
<div class="mainC">
  <img class="leftPic" src="./svg/登录@1x.svg" alt="">
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h2>Welcome</h2>
      </div>
      <div class="formdata">
        <el-form ref="form">
          <el-form-item prop="username">
            <el-input

                clearable
                placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input

                clearable
                placeholder="请输入密码"
                show-password
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="tool">
        <div>
          <el-checkbox
          >记住密码</el-checkbox
          >
        </div>
        <div>
          <span class="shou" @click="">忘记密码？</span>
        </div>
      </div>
      <div class="butt">
        <el-button type="primary">登录</el-button
        >
        <el-button class="shou" @click="">注册</el-button>
      </div>
    </div>
  </div>

</div>
<!--<h1>我是登录界面</h1>-->
<!--<h1>  <router-link to="/home">点我进首页</router-link></h1>-->
</template>

<style scoped lang="less">
.mainC{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  img{
    width: 500px;
    height: 100vh;
  }
}
//.leftPic{
//  height: 100%;
//}
//登录表单
.loginForm{
  width: 500px;
  height: 600px;
  border: 1px solid red;
  margin-right: 150px;
}

.loginbody {
  border: 1px solid red;
  margin-right: 150px;
  width: 500px;
  height: 400px;
  //background-image: url("../assets/login2.jpg");
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;

  line-height: 100%;
  padding-top: 150px;
}

.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.tool {
  display: flex;
  justify-content: space-between;
  color: #606266;
}

.butt {
  margin-top: 10px;
  text-align: center;
}

.shou {
  cursor: pointer;
  color: #606266;
}

/*ui*/
/* /deep/ .el-form-item__label {
  font-weight: bolder;
  font-size: 15px;
  text-align: left;
}

/deep/ .el-button {
  width: 100%;
  margin-bottom: 10px;

} */
</style>