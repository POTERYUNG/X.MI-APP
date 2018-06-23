<template>
  <div class="app-init classification">
    <div class="classification-header">
      <header-back title="分类"></header-back>
    </div>

    <div class="wrap-box">
      <div class="left-menu absolute scroll-box" ref="left">
        <ul>
          <li class="item" v-for="(target, index) in dataItem" :class="{ 'active': index == active }" @click="jumpToTarget(index)">{{target.name}}</li>
        </ul>
      </div>

      <div class="right-box absolute scroll-box" ref="rightView">
        <ul>
          <li class="item" v-for="(target, index) in dataItem">
            <div class="nav-mi-tj clear">
              <a href="javascript:" class="fl">
                <img :src="target.src" alt="">
              </a>
            </div>
            <p class="title">
              <span>{{target.name}}</span>
            </p>
            <div class="shop-item-wrap clear">
              <div class="shop-item" v-for="shop in target.children" @click="$router.openPage(shop.link)">
                <img :src="shop.src" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBack from '../header-back'
  import _ from 'lodash'
  import VueDB from '../../util/vue-db/vue-db'

  let DB = new VueDB()

  export default{
    name: 'classification',
    data(){
      return {
        active: 0,
        dataItem: [
          {
            name: '新品',
            src: 'src/assets/img/classify/xinpin0.jpg',
            children: [
              {
                src: 'src/assets/img/classify/xinpin01.jpg',
                link: '/detail/1020'
              },
              {
                src: 'src/assets/img/classify/xinpin02.jpg',
                link: '/detail/1004'
              },
              {
                src: 'src/assets/img/classify/xinpin03.jpg',
                link: '/detail/1014'
              }
            ]
          },
          {
            name: '手机',
            src: 'src/assets/img/classify/xinpin0.jpg',
            children: [
              {
                src: 'src/assets/img/classify/xinpin01.jpg',
                link: '/detail/1020'
              }
            ]
          },
          {
            name: '电视',
            src: 'src/assets/img/classify/dianshiD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/dianshi.jpg',
                link: '/detail/1004'
              }
            ]
          },
          {
            name: '电脑',
            src: 'src/assets/img/classify/diannaoD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/xinpin03.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '家电',
            src: 'src/assets/img/classify/jiadianD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/jiadian.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '家装',
            src: 'src/assets/img/classify/jiazhuangD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/jiazhuang.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '路由',
            src: 'src/assets/img/classify/luyouD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/luyou.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '智能',
            src: 'src/assets/img/classify/zhinengD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/zhineng.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '儿童',
            src: 'src/assets/img/classify/ertongD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/ertong.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '灯具',
            src: 'src/assets/img/classify/dengjuD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/dengju.jpg',
                link: '/detail/1019'
              }
            ]
          },

          {
            name: '电源',
            src: 'src/assets/img/classify/dianyuanD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/dianyuan.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '耳机',
            src: 'src/assets/img/classify/erjiD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/erji.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '音箱',
            src: 'src/assets/img/classify/yinxiangD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/yinxiang.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '礼品',
            src: 'src/assets/img/classify/lipingD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/liping.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '生活',
            src: 'src/assets/img/classify/shenghuoD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/shenghuo.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '服务',
            src: 'src/assets/img/classify/fuwuD.jpg',
            children: [
              {
                src: 'src/assets/img/classify/fuwu.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '米粉卡',
            children: [
              {
                src: 'src/assets/img/classify/mifenka.jpg',
                link: '/detail/1019'
              }
            ]
          },
          {
            name: '零售店',
            children: [
              {
                src: 'src/assets/img/classify/lingshoudian.jpg',
                link: '/detail/1019'
              }
            ]
          }
        ],

        offset: []
      }
    },
    components: {
      headerBack
    },
    methods: {
      jumpToTarget(index) {
        let scrollTop = this.offset[index];
        this.$refs.rightView.scrollTop = scrollTop;
        setTimeout(()=>{
          this.active = index
        }, 10)
      }
    },
    mounted() {

      let scrollDB = {
        left: DB.getItemOnce('classification-left-scrollTop').toNumber(),
        right: DB.getItemOnce('classification-right-scrollTop').toNumber()
      };
      setTimeout(()=>{
        _.forEach(this.$refs.rightView.querySelectorAll('.item'), (value, key)=>{
          this.offset.push(value.offsetHeight*key)
        });


        let mySort = this.offset;

        this.$refs.rightView.addEventListener('scroll', e=>{

          let eScrollTop = this.$refs.rightView.scrollTop;

          for(let indexer=0; indexer<mySort.length; indexer++){
            if(eScrollTop > mySort[indexer]){
              this.active =  indexer;
            }
          }
        });
        setTimeout(()=>{
          this.$refs.left.scrollTop = scrollDB.left
          this.$refs.rightView.scrollTop = scrollDB.right
        }, 10)
      }, 100)
    },
    beforeRouteLeave (to, from, next) {
      DB.setItem('classification-left-scrollTop', this.$refs.left.scrollTop);
      DB.setItem('classification-right-scrollTop', this.$refs.rightView.scrollTop);
      next();
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import "../../assets/sass/util"
  .classification
    background-color: #fff

    .wrap-box
      position: absolute
      width: 100%
      top: getIphonese(100px)
      left: 0
      bottom: $footerHeight

    .left-menu
      width: getIphonese(133px)
      left: 0
      top: 0
      bottom: 0
      border-right: 1px solid #efefef
      overflow-x: hidden
      @include box-sizing

      ul
        padding-bottom: 0.44rem
      li.item
        margin-top: getIphonese(56px)
        text-align: center
        -webkit-transition: all .1s ease
        transition: all .1s ease
      li.item.active
        color: #fb7d34
        transform: scale(1.2)
    .right-box
      left: getIphonese(133px)
      top: 0
      right: 0
      bottom: 0
      .item
        padding-top: 0.8rem
      .title
        text-align: center
        padding-bottom: 0.2rem
        span
          position: relative
          display: inline-block

          &:after,&:before
            display: inline-block
            width: getIphonese(34px)
            height: 1px
            top: 50%
            background-color: #e0e0e0
            position: absolute
            content: ''
          &:after
            left: getIphonese(-50px)
          &:before
            right: getIphonese(-50px)
      .shop-item-wrap
        .shop-item
          text-align: center
          float: left
          width: 100%
          color: #757575
          margin-bottom: 0.1rem
          @include f12px
          img
            width: 100%
            padding-bottom: 0.1rem
</style>
