<template>
  <div>
    <div class="header-back" :class="{ 'active': active }">
      <p>用户注册</p>
      <span class="iconfont icon-backer myicon back" @click="$router.go(-1)"></span>
    </div>
    <div class="loginContent">
      <h2>注册账号</h2>
      <div class="form">
        <mt-field placeholder="请输入手机号/邮箱/小米账号" v-model="username"></mt-field>
        <mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <span class="regNumber" @click="$router.openPage('/login')">已有账号？直接登录</span>
        <mt-button type="primary">一键注册</mt-button>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'reg',
    data() {
      return {
        active: false,
        username: '',
        password: ''
      }
    },
    mounted() {
      setTimeout(()=>{
        this.active = true;
      }, 10)
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import '../../assets/sass/util'
  .header-back.active
    transform: translateY(0%)
  .header-back
    line-height: getIphonese(42px)
    padding: getIphonese(30px) 0
    background-color: #f2f2f2
    @include ani01-transform
    transform: translateY(-100%)

    @include f14px
    color: #666666
    text-align: center
    position: relative
    .myicon
      position: absolute
      width: getIphonese(88px)
      line-height: getIphonese(42px)
      top: getIphonese(30px)
      color: #919191
      font-size: 0.58rem

    .back
      left: 0
  .loginContent
    position: fixed
    top: 60px
    background: #fff
    height: 100%
    width: 100%
    h2
      text-align: center
      margin: 50px auto 20px
    .form
      padding: 10px 20px
      .mint-button--normal
        width: 95%
        margin: 20px 10px
      .mint-cell-wrapper
        border-bottom: 1px solid #ddd
      .regNumber
        margin: 20px 0 40px 15px
        display: block
        color: #f60
</style>

