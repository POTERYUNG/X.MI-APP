<template>
  <div class="app-init">
    <div class="header-back" :class="{ 'active': active }">
      <p>资讯详情</p>
      <span class="iconfont icon-backer myicon back" @click="$router.go(-1)"></span>
    </div>
    <div class="app-init scroll-box mi-tj footer-hack">
      <News-Container :NewsContainer="NewsContainer"  class="app-init scroll-box "></News-Container>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NewsContainer from './component/NewsContainer'
  import axios from 'axios'
  export default {
    name:"information",
    components:{
      NewsContainer
    },
    data(){
      return{
        NewsContainer:[],
        active: false
      }
    },
    created(){
      let _this=this;
      axios.get("/static/server/discover.json").then(function(res) {
        _this.NewsContainer=res.data.data.news
      })

    },
    methods: {
      open:function(id){
        console.log("详情后续再补上");
      },
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
    z-index: 10000
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
    .search
      right: 0
</style>
