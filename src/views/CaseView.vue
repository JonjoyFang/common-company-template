<template>
  <div class="case">
    <img src="@/assets/img/case-banner.jpg" />
    <div class="case-content">
      <div class="about-content-left">
        <div class="title">应用领域</div>
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="listNum == index ? 'list-box list-box-active' : 'list-box'"
          @click="changeList(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="about-content-right">
        <div class="title">
          应用领域
          <div class="maodian">
            <RouterLink to="/">首页</RouterLink> > 应用领域
          </div>
        </div>
        <div class="right-content">
          <div class="right-content-list">
            <div
              class="content-list-box"
              v-for="(item, index) in itemList"
              :key="index"
            >
              <div class="img">
                <img :src="item.img" />
              </div>
              <h3>{{ item.name }}</h3>
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
import hangye1 from "@/assets/img/hangye1.jpg";
import hangye2 from "@/assets/img/hangye2.png";
import hangye3 from "@/assets/img/hangye3.png";
import hangye4 from "@/assets/img/hangye4.png";
import hangye5 from "@/assets/img/hangye5.png";
import hangye6 from "@/assets/img/hangye6.png";
let listNum = ref();
const list = ["行业应用"];
const itemList = [
  {
    name: "机器人",
    img: hangye1,
  },
  {
    name: "检测分析设备",
    img: hangye2,
  },
  {
    name: "自动化设备",
    img: hangye3,
  },
  {
    name: "医疗器械",
    img: hangye4,
  },
  {
    name: "通讯设备",
    img: hangye5,
  },
  {
    name: "航天航空",
    img: hangye6,
  },
];
const changeList = (index) => {
  listNum.value = index;
};
</script>
<style lang="scss" scoped>
.case {
  width: 100%;
  height: 100%;
  .case-content {
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
          flex-wrap: wrap;
          .content-list-box {
            display: block;
            width: 258.33333px;
            height: auto;
            float: left;
            margin-right: 20px;
            margin-bottom: 20px;
            padding: 20px;
            cursor: pointer;
            .img {
              display: block;
              width: 100%;
              height: 150px;
              text-align: center;
              line-height: 180px;
              transition: all 0.6s;
              box-sizing: border-box;

              img {
                width: 218px;
                height: 150px;
              }
            }
            h3 {
              width: 100%;
              height: 50px;
              line-height: 50px;
              font-weight: bold;
              text-align: center;
              border-bottom: 1px solid #c9c9c9;
              transition: all 0.6s;
            }
            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
