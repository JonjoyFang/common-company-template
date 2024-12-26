<template>
  <div class="contact">
    <img src="@/assets/img/contact-banner.jpg" />
    <div class="contact-content">
      <div class="about-content-left">
        <div class="title">联系我们</div>
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
          {{ list[listNum] }}
          <div class="maodian">
            <RouterLink to="/">首页</RouterLink> > {{ list[listNum] }}
          </div>
        </div>
        <div class="right-content">
          <!-- 联系方式 -->
          <div class="contact-ditu" v-show="listNum == 0">
            <div id="map" style="width: 100%; height: 400px"></div>
            <!-- <img src="@/assets/img/ditu.jpg" /> -->

            <br />
            <h3>深圳市楚林机电设备有限公司</h3>
            <br />
            <p>联系人：张振</p>
            <br />

            <p>联系电话：13651472302</p>
            <br />

            <p>地址：深圳市光明区公明街道水墩街23号605</p>
            <br />
            <p>邮箱：alex@zchulin.com</p>
            <br />
          </div>
          <!-- 客户留言 -->
          <div v-show="listNum == 1">
            <el-form
              :model="form"
              :rules="rules"
              label-width="auto"
              style="max-width: 600px"
              ref="ruleFormRef"
            >
              <el-form-item label="联系人：" prop="contact" required>
                <el-input v-model="form.contact" />
              </el-form-item>
              <el-form-item label="电话：" prop="phone" required>
                <el-input v-model="form.phone" />
              </el-form-item>
              <el-form-item label="备注：" prop="content">
                <el-input v-model="form.content" type="textarea" />
              </el-form-item>
              <el-form-item
                class="qrcodeFrom"
                prop="codeNum"
                label="验证码："
                required
              >
                <el-input v-model="form.codeNum" @blur="onBlurCode" />
                <div class="codeBox">
                  <canvas width="100" height="50" id="captchaCode"></canvas>
                </div>
              </el-form-item>
              <el-form-item class="button-box">
                <el-button type="primary" @click="onSubmit(ruleFormRef)"
                  >提交</el-button
                >
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import CaptchaMini from "captcha-mini";
import { ElMessage } from "element-plus";

let listNum = ref(0);
let codeNum = ref(null);
let verifyStatus = ref(false);
const rules = reactive({
  contact: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
  phone: [{ required: true, message: "电话不能为空", trigger: "blur" }],
  codeNum: [{ required: true, message: "验证码不能为空", trigger: "blur" }],
});
const form = reactive({
  contact: "", // 联系人
  phone: "", // 联系电话
  content: "", // 备注
  codeNum: "", // 验证码
});
const ruleFormRef = ref();

const list = ["联系方式", "客户留言"];
onMounted(() => {
  if (listNum.value == 0) {
    initMap();
  } else {
    makeCode();
  }
});

// 初始化高德地图
const initMap = async () => {
  const AMap = window.AMap; // 假设高德地图脚本已通过script标签加载到window.AMap
  let mapInit = new AMap.Map("map", {
    zoom: 10, // 地图显示的缩放级别
    center: [113.912825, 22.775892], // 地图中心点坐标
  });
  const position = new AMap.LngLat(113.912825, 22.775892); //Marker 经纬度

  //点标记显示内容
  const markerContent = `<div class="custom-content-marker">
<svg class="icon" style="width: 2em;height: 2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7155"><path d="M426.309818 927.394909a85.690182 84.968727 0 1 0 171.380364 0 85.690182 84.968727 0 1 0-171.380364 0Z" fill="#64C6B3" p-id="7156"></path><path d="M473.914182 927.394909a38.085818 37.76 0 1 0 76.171636 0 38.085818 37.76 0 1 0-76.171636 0Z" fill="#106253" p-id="7157"></path><path d="M540.567273 568.645818v348.718546a28.567273 28.567273 0 1 1-57.134546 0V625.768727a57.134545 57.134545 0 0 1 57.134546-57.134545z" fill="#4F9D8F" p-id="7158"></path><path d="M197.818182 323.188364a314.181818 311.552 0 1 0 628.363636 0 314.181818 311.552 0 1 0-628.363636 0Z" fill="#06BC99" p-id="7159"></path><path d="M407.272727 323.188364a104.727273 103.854545 0 1 0 209.454546 0 104.727273 103.854545 0 1 0-209.454546 0Z" fill="#FFFFFF" p-id="7160"></path></svg><span style="display:block;width:200px;height:34px;background:#fff;border:1px solid red;text-align:center;line-height:34px">深圳市楚林机电设备有限公司</span>
</div>`;
  const marker = new AMap.Marker({
    position: position,
    content: markerContent, //将 html 传给 content
    offset: new AMap.Pixel(-13, -30), //以 icon 的 [center bottom] 为原点
  });
  await mapInit.add(marker);
};
// 生成验证码
const makeCode = () => {
  /*传值,参数配置值，选择性配置*/
  let captcha2 = new CaptchaMini({
    lineWidth: 1, //线条宽度
    lineNum: 6, //线条数量
    dotR: 2, //点的半径
    dotNum: 25, //点的数量
    preGroundColor: [10, 80], //前景色区间
    backGroundColor: [150, 250], //背景色区间
    fontSize: 30, //字体大小
    fontFamily: ["Georgia", "微软雅黑", "Helvetica", "Arial"], //字体类型
    fontStyle: "stroke", //字体绘制方法，有fill和stroke
    content: "123456789", //验证码内容
    length: 6, //验证码长度
  });

  captcha2.draw(document.querySelector("#captchaCode"), (r) => {
    console.log(r, "验证码2");
    codeNum.value = r;
  });
};
const changeList = (index) => {
  listNum.value = index;
  if (index == 1) {
    // 改变左侧导航栏时刷新验证码
    makeCode();
  } else {
    initMap();
  }
};
const onBlurCode = () => {
  let status = form.codeNum == codeNum.value;
  verifyStatus.value = status;
  console.log(form, form.codeNum, codeNum.value, "vvvvv");
  if (!status) {
    // 给错误提示并清空输入框、刷新验证码
    ElMessage.error("验证码错误");
    form.codeNum = "";
    makeCode();
  }
};
const onSubmit = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 100%;
  .contact-content {
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
        .contact-ditu {
          width: 850px;
          img {
            width: 850px;
          }
        }
        .el-form {
          .qrcodeFrom {
            display: flex;
            align-items: center;
            .el-input {
              display: inline-block;
              width: 200px;
            }
            .codeBox {
              display: inline-block;
              margin-left: 8px;
            }
          }
          .button-box {
            .el-form-item__content {
              justify-content: center;
            }
          }
        }
      }
    }
  }
  .amap-maps {
    .amap-layers {
      .amap-markers {
        .amap-marker {
          .custom-content-marker {
            position: relative;
            width: 400px;
            height: 40px;
            .marker-text {
              display: block;
              width: 400px;
              height: 40px;
              position: absolute;
              top: 0;
              left: 0;
              background: yellow;
              font-size: 14px;
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>
