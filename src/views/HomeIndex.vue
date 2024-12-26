<template>
  <div class="common-layout">
    <el-carousel direction="horizontal" indicator-position="" height="650px">
      <el-carousel-item v-for="item in carouselList" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <div class="layout-tem">
      <div v-for="(item, index) in list" :key="index" class="layout-template">
        <RouterLink :to="item.link">
          <div :class="item.className">
            <h3>{{ item.name }}</h3>
            <p>{{ item.engName }}</p>
            <img src="@/assets/img/ir.png" />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import banner1 from "@/assets/img/banner1.png";
import banner2 from "@/assets/img/banner1.png";
import banner3 from "@/assets/img/banner1.png";
import banner4 from "@/assets/img/banner1.png";
const carouselList = [banner1, banner2, banner3, banner4];
const list = [
  {
    name: "关于我们",
    engName: "About us",
    className: "layout-template-box layout-template-box1",
    link: "/about",
  },
  {
    name: "产品中心",
    engName: "Product center",
    className: "layout-template-box layout-template-box2",
    link: "/product",
  },
  {
    name: "应用领域",
    engName: "Application area",
    className: "layout-template-box layout-template-box3",
    link: "/case",
  },
  {
    name: "服务支持",
    engName: "Service support",
    className: "layout-template-box layout-template-box4",
    link: "/download",
  },
];
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
  .layout-tem {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .layout-template {
      width: 580px;
      height: 193.33px;
      position: relative;
      margin-bottom: 30px;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #333;
        background: none;
        &:hover {
          background: none;
        }
      }
      .layout-template-box {
        width: 100%;
        height: 100%;
        padding: 50px;
        color: #333;
        h3 {
          font-size: 18px;
        }
        p {
          font-size: 14px;
          line-height: 60px;
        }
        img {
          width: 36px;
          height: 36px;
          position: absolute;
          left: 50px;
          bottom: 20px;
        }
      }
      .layout-template-box1 {
        background: url("@/assets/img/1.jpg");
      }
      .layout-template-box2 {
        background: url("@/assets/img/3.jpg");
      }
      .layout-template-box3 {
        background: url("@/assets/img/3.jpg");
      }
      .layout-template-box4 {
        background: url("@/assets/img/4.jpg");
      }
    }
  }
}
</style>
