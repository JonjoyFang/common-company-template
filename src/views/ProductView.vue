<template>
  <div class="product">
    <img src="@/assets/img/product-banner.jpg" />
    <div class="product-content">
      <div class="about-content-left">
        <div class="title">产品中心</div>
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="listNum == index ? 'list-box list-box-active' : 'list-box'"
          @click="changeList(index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="about-content-right">
        <div class="title">
          {{ listNum == null ? "服务介绍" : list[listNum].name }}
          <div class="maodian">
            <RouterLink to="/">首页</RouterLink> >
            {{ listNum == null ? "服务介绍" : list[listNum].name }}
          </div>
        </div>
        <div class="right-content">
          <div
            class="right-content-list right-content-list-all"
            v-if="listNum == null"
          >
            <div
              class="content-list-box"
              v-for="(item, index) in list"
              :key="index"
            >
              <div class="img">
                <img :src="item.img" />
              </div>
              <div class="btn">了解详情</div>
            </div>
          </div>
          <div class="right-content-list" v-else>
            <div class="content-list-box">
              <div class="img">
                <img :src="list[listNum].img" />
              </div>
              <div class="btn">了解详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import xieboImg from "@/assets/img/xiebo.jpg";
import scaImg from "@/assets/img/sca.jpg";
import sifuImg from "@/assets/img/sifu.jpg";
let listNum = ref(null);
const list = [
  {
    name: "谐波减速机",
    img: xieboImg,
  },
  {
    name: "SCARA",
    img: scaImg,
  },
  {
    name: "执行元件",
    img: sifuImg,
  },
];
const changeList = (index) => {
  listNum.value = index;
};
</script>
<style lang="scss" scoped>
.product {
  width: 100%;
  height: 100%;
  .product-content {
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    color: #333;
    display: flex;
    justify-content: space-between;
    .about-content-left {
      width: 295px;
      margin-right: 50px;
      .title {
        width: 100%;
        height: 80px;
        line-height: 80px;
        box-sizing: border-box;
        padding: 0 20px;
        background: #f8f8f8;
        border-bottom: 3px solid #00b7f3;
        font-size: 18px;
        color: #00b7f3;
        margin-bottom: 20px;
      }
      .list-box {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        background: #f8f8f8;
        margin-bottom: 10px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.8s;
      }
      .list-box-active {
        background: #00b7f3;
        color: #ffffff;
      }
    }
    .about-content-right {
      flex: 1;
      height: auto;
      background: #f8f8f8;
      .title {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #00b7f3;
        color: #ffffff;
        font-size: 14px;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;

        .maodian {
          a {
            color: #ffffff;
          }
          color: #ffffff;
          font-size: 12px;
        }
      }
      .right-content {
        min-height: 200px;
        padding: 20px;
        line-height: 1.75em;
        .right-content-list {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          // flex-wrap: wrap;
          .content-list-box {
            display: block;
            width: 258.33333px;
            height: auto;
            background: #ffffff;
            margin-right: 20px;
            margin-bottom: 20px;
            padding: 20px;
            cursor: pointer;
            .img {
              display: block;
              width: 100%;
              height: 180px;
              text-align: center;
              line-height: 180px;
              // border-bottom: 1px solid #c9c9c9;
              transition: all 0.6s;
              box-sizing: border-box;

              img {
                width: 167px;
                height: 179px;
              }
            }
            .btn {
              width: 120px;
              height: 35px;
              line-height: 35px;
              margin: 30px auto 0 auto;
              text-align: center;
              border: 1px solid #cccccc;
              transition: all 0.6s;
            }
          }
        }
        .right-content-list-all {
          .content-list-box {
            // width: 100%;
          }
        }
      }
    }
  }
}
</style>
