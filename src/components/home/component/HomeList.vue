<template>
  <div class="HomeList">
    <ul>
      <li><div @click="xuanGou"><img src="../../../assets/img/xuangou.jpg" alt="选购"></div></li>
      <li><div @click="parts"><img src="../../../assets/img/peijian.jpg" alt="配件"></div></li>
      <li><div @click="pingbao"><img src="../../../assets/img/pingbao.jpg" alt="屏保"></div></li>
      <li><div @click="dingzhi"><img src="../../../assets/img/dingzhi.jpg" alt="定制"></div></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeList',
    methods: {
      xuanGou: function() {
        this.$router.push({path: 'choose'})
      },
      parts: function() {
        this.$router.push({path: 'parts'})
      },
      pingbao: function() {
//        this.$router.push({path: 'pingbao'})
        MessageBox('屏保页面！');
      },
      dingzhi: function() {
//        this.$router.push({path: 'dingzhi'})
        MessageBox('定制页面！');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .HomeList {
    width 100%;
    height 2.5rem;
    background white;
    border-bottom 1px solid #cccccc;
    li {
      width: 25%;
      float: left;
      margin: auto;
      div {
        width: 1.7rem;
        height: 1.68rem;
        margin: auto;
        img {
          display: block;
          width: 100%;
          height: 100%;
          margin: 15px auto
        }
      }
    }
  }
</style>
