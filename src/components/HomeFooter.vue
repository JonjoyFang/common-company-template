<template>
  <div class="foot">
    <div class="ft">
      <div class="content">
        <div class="content-left">
          <img src="@/assets/img/logo.jpg" />
          <h3>深圳市楚林机电设备有限公司</h3>
          <p>联系人：张振 电话：13651472302</p>
          <p>地址：深圳市光明区公明街道水墩街23号605</p>
        </div>
        <div class="content-center">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="content-center-item"
          >
            <h3>{{ item.name }}</h3>
            <p v-for="(cItem, cIndex) in item.child" :key="cIndex">
              {{ cItem }}
            </p>
          </div>
        </div>
        <div class="content-right">
          <h3>扫码关注</h3>
          <img src="@/assets/img/qrcode.jpg" />
          <p>扫一扫关注官方微信</p>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script setup>
const list = [
  {
    name: "关于我们",
    child: ["公司介绍", "企业文化"],
  },
  {
    name: "产品中心",
    child: ["谐波减速机", "SCARA", "执行元件"],
  },
  {
    name: "应用领域",
    child: ["行业应用"],
  },
  {
    name: "新闻资讯",
    child: ["公司动态", "行业资讯"],
  },
  {
    name: "服务介绍",
    child: ["样本下载", "资料下载"],
  },
  {
    name: "联系我们",
    child: ["联系方式", "客户留言"],
  },
];
</script>
<style lang="scss" scoped>
.foot {
  width: 100%;
  height: 450px;
  background: url(@/assets/img/foot.png) no-repeat center;
  color: #fff;
  background-size: cover;
  position: relative;
  padding: 50px 0;
  .ft {
    width: 100%;
    padding: 25px 0;
    .content {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .content-left {
        img {
          max-height: 40px;
          margin: 0 auto 15px auto;
        }
        h3 {
          margin-bottom: 10px;
        }
        p {
          color: #fff;
          line-height: 28px;
        }
      }
      .content-center {
        display: flex;
        .content-center-item {
          padding-top: 50px;
          margin-right: 10px;
          h3 {
            margin-bottom: 10px;
          }
          p {
            color: #ffffff;
            line-height: 28px;
          }
        }
      }
      .content-right {
        padding-top: 50px;
        text-align: center;
        img {
          width: 110px;
        }
        h3 {
          margin-bottom: 10px;
        }
        p {
          color: #fff;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
