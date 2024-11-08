<template>
  <div class="about">
    <img src="@/assets/img/about-banner.jpg" />
    <div class="about-content">
      <div class="about-content-left">
        <div class="title">关于我们</div>
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
          {{ list[listNum].name }}
          <div class="maodian">
            <RouterLink to="/">首页</RouterLink> > {{ list[listNum].name }}
          </div>
        </div>
        <div class="right-content">
          <!-- 公司介绍 -->
          <div class="right-content-box jieshao" v-if="listNum == 0">
            深圳市楚林机电设备有限公司位于风景秀丽的深圳市光明新区，是一家结合自动化方案设计的进口精密传动部件的服务商。
            公司经营产品有TECMOTION四轴多关节机械手、高精密伺服执行器、精密谐波减速机、精密行星减速机、EtherCAT协议伺服电机、非标准两轴关节模组。
            公司经历多年的发展，已经在五轴加工领域、义齿加工、AOI视觉检测设备、3C非标自动化产线、精密点胶等行业建立了良好的口碑。
            公司以优异稳定的产品品质、专业的技术服务赢得了市场的信赖。
            我们拥有经验丰富的销售和技术团队，通过服务提升客户满意度，不断了解客户需求，持续跟踪客户发展,不断向客户学习，为客户提供优秀的产品解决方案。
            技术在前线，服务在身边。
            希望通过我们优异的产品和专业的服务，能为您的事业发展助一臂之力！
            <!-- 优势： 产品品质稳定、性价比高 常规型号有库存，支持非标定制
            提供专业的技术选型 优秀的售后服务团队 -->
          </div>
          <!-- 企业文化 -->
          <div class="right-content-box wenhua" v-else>
            <div class="wenhua-box">
              <div class="wenhua-box-left">
                <br />
                <br />
                <h3>使命</h3>
                <p>成就智能工业，引领智能生活</p>
                <br />
                <br />
                <br />
                <h3>愿景</h3>
                <p>成为全球最具国际竞争力的谐波减速机供应商</p>
              </div>
              <img src="@/assets/img/wenhua2.jpg" />
            </div>
            <div class="wenhua-box">
              <img src="@/assets/img/wenhua3.jpg" />
              <div class="wenhua-box-left">
                <br />
                <br />
                <h3>核心价值观</h3>
                <p>客户第一 服务至上 诚信为本</p>
                <br />
                <br />
                <br />
                <h3>企业精神</h3>
                <p>百年德美，品质为先</p>
              </div>
            </div>
            <div class="wenhua-box">
              <div class="wenhua-box-left">
                <br />
                <br />
                <h3>经营理念</h3>
                <p>专注严谨、创新发展、成就客户、回馈社会</p>
                <br />
                <br />
                <br />
                <h3>服务理念</h3>
                <p>一流的产品，准确的纳期，优质的售后</p>
              </div>
              <img src="@/assets/img/wenhua4.png" />
            </div>
            <div class="wenhua-box">
              <img src="@/assets/img/wenhua5.png" />
              <div class="wenhua-box-left">
                <br />
                <br />
                <h3>质量方针</h3>
                <p>优质高效、精益求精、至诚服务、誉满全球</p>
              </div>
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
let listNum = ref(0);
const list = [
  {
    name: "公司介绍",
    key: "jieshao",
  },
  {
    name: "企业文化",
    key: "wenhua",
  },
];
const changeList = (index) => {
  listNum.value = index;
};
</script>
<style lang="scss" scoped>
.about {
  img {
    width: 100%;
  }
  .about-content {
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
      // padding: 20px 0 50px 0;
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
      .wenhua {
        width: 100%;
        .wenhua-box {
          width: 100%;
          display: flex;
          justify-content: space-between;
          p {
            line-height: 1.75em;
          }
          .wenhua-box-left {
            h3 {
              font-size: 24px;
              font-weight: bold;
            }
            p {
            }
          }
          img {
            width: 401px;
          }
        }
      }
    }
  }
}
</style>
