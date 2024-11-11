<template>
  <div class="news">
    <img src="@/assets/img/news-banner.jpg" />
    <div class="news-content">
      <div class="about-content-left">
        <div class="title">新闻资讯</div>
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
          {{ listNum == null ? "资讯动态" : list[listNum] }}
          <div class="maodian">
            <RouterLink to="/">首页</RouterLink> >
            {{ listNum == null ? "资讯动态" : list[listNum] }}
          </div>
        </div>
        <div class="right-content">
          <div v-if="listNum == 1" class="content-news">
            <div
              class="content-news-item"
              v-for="(item, index) in newsList"
              :key="index"
            >
              <img :src="item.img" />
              <div class="news-item-right">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
                <div class="date">{{ item.date }}</div>
              </div>
            </div>
          </div>
          <div v-else></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import news1Img from "@/assets/img/news1.png";
import news2Img from "@/assets/img/news2.jpg";
let listNum = ref(null);
const list = ["公司新闻", "行业动态"];
const newsList = [
  {
    title: "我国装备制造业转型升级迫在眉睫 ",
    img: news1Img,
    text: "当前全球经济形势错综复杂，中国经济一直处于调整之中，中国装备制造业仍未走出低谷，转型升级迫在眉睫。与此同时，随着环境红利、人口红利的消失，资源、环境等社会责任问...",
    date: "2021-05-14",
  },
  {
    title: "【中国科学报】中科院制造的机器人 ",
    img: news2Img,
    text: "机器人的研发和利用已然成为中国乃至全球的热点。目前，西方国家的机器人主要制造商都在纷纷加紧布局，抢占技术和市场制高点。　　在今年6月9日召开的2014年两院院士...",
    date: "2020-12-12",
  },
];
const changeList = (index) => {
  listNum.value = index;
};
</script>
<style lang="scss" scoped>
.news {
  width: 100%;
  height: 100%;
  .news-content {
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
        .content-news {
          width: 100%;
          .content-news-item {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            img {
              width: 160px;
              height: 140px;
            }
            .news-item-right {
              margin-left: 40px;
              flex: 1;
              h3 {
                margin-bottom: 15px;
              }
              p {
                color: #333333;
                line-height: 30px;
              }
              .date {
                width: 100%;
                height: 60px;
                line-height: 60px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
