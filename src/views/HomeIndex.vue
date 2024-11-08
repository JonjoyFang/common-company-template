<template>
  <div class="common-layout">
    <el-carousel direction="horizontal" indicator-position="" height="650px">
      <el-carousel-item v-for="item in carouselList" :key="item">
        <img src="@/assets/img/Banner.jpg" />
      </el-carousel-item>
    </el-carousel>
    <div class="layout-tem">
      <div v-for="(item, index) in list" :key="index" class="layout-template">
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const carouselList = [
  '@/assets/img/Banner.jpg',
  '@/assets/img/Banner.jpg',
  '@/assets/img/Banner.jpg',
]
const list = [
  {
    name: '关于我们',
    engName: 'About us',
    className: 'layout-template-box1',
  },
  {
    name: '产品中心',
    engName: 'Product center',
    className: 'layout-template-box2',
  },
  {
    name: '应用领域',
    engName: 'Application area',
    className: 'layout-template-box3',
  },
  {
    name: '服务支持',
    engName: 'Service support',
    className: 'layout-template-box4',
  },
]
</script>
<style lang="scss" scoped>
.common-layout {
  width: 100%;
  min-height: calc(100% - 550px);
  .el-carousel__item {
    h3 {
      display: flex;
      color: #475669;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
