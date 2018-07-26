<template>

<div class="cate">
  <div class="cate_header_wrapper">
    <div  class="header ">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品, 共10718款好物</span>
      </div>
    </div>
  </div>
  <div class="bottom">
    <ClassNav/>
    <Cate/>
  </div>
</div>

</template>

<script>
  import BScroll from  'better-scroll'
  import ClassNav from '../../components/ClassNav/ClassNav.vue'
  import Cate from '../../components/Cate/Cate.vue'

  export default {
    data(){
      return{
        currentIndex:0,
      }
    },
    computed:{

    },
    mounted(){

    },
    methods:{

    },
    components:{
      ClassNav,
      Cate
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
  .cate{
    background: #fff;
    overflow: hidden;
    .cate_header_wrapper{
      position: relative;
      .header{
        border-bottom: 1px solid #eee;
        background: #fff;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height:88/@rem;
        box-sizing: border-box;
        padding: 10px;
       // margin-top: -5px;
        .search{
          width: 100%;
          height:56/@rem;
          background: #EDEDED;
          text-align: center;
          border-radius: 5px;
          .placeholder{
            font-size: 12px;
            vertical-align: middle;
            color:#666;

          }
        }
      }
    }

    .bottom{
      margin-top: 88/@rem;
      display: flex;
      margin-bottom:88/@rem;
      width: 100%;


    }

  }

</style>
