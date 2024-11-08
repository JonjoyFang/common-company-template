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
        <div class="right-content"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";
let listNum = ref();
const list = ["行业应用"];
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
      .right-content-box {
        min-height: 200px;
        padding: 20px;
        line-height: 1.75em;
      }
    }
  }
}
</style>
