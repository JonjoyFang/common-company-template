<template>
  <div class="header-pc">
    <div :span="12" :offset="6" class="header-pc-box">
      <div class="logo-box">
        <img class="logo-box-img" src="@/assets/img/logo.jpg" />
      </div>
      <div class="lists">
        <div
          v-for="(item, index) in tabList"
          :key="index"
          :class="index == tabIndex ? 'lists-item lists-item-active' : 'lists-item'"
          @click="changeTab(index)"
        >
          <RouterLink :to="item.link">{{ item.name }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
let tabIndex = ref(0)
let tabList = [
  {
    name: '首页',
    link: '/',
  },
  {
    name: '关于我们',
    link: '/about',
  },
  {
    name: '产品中心',
    link: '/product',
  },
  {
    name: '应用领域',
    link: '/case',
  },
  {
    name: '新闻资讯',
    link: '/news',
  },
  {
    name: '服务介绍',
    link: '/download',
  },
  {
    name: '联系我们',
    link: '/contact',
  },
]
const changeTab = (index) => {
  tabIndex.value = index
}
</script>
<style lang="scss" scoped>
.header-pc {
  width: 100%;
  height: 100px;
  background: #00b7f3;
  .header-pc-box {
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    .logo-box {
      width: 400px;
      height: 53px;
      .logo-box-img {
        width: 400px;
        height: 53px;
      }
    }

    .lists {
      display: flex;
      .lists-item {
        display: block;
        line-height: 100px;
        font-size: 14px;
        color: #e0e0e0;
        position: relative;
        margin-left: 48px;
        a {
          color: #e0e0e0;
          &:hover {
            background: none;
          }
        }
        &::after {
          width: 70px;
          height: 2px;
          background: #ffffff;
          content: '';
          position: absolute;
          left: 50%;
          margin-left: -35px;
          bottom: 15px;
          opacity: 0;
          border-radius: 3px;
        }
      }
      .lists-item-active {
        a {
          color: #fff;
          &:hover {
            background: none;
          }
        }
        &::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
