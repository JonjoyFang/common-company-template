<template>
  <div class="product">
    <img src="@/assets/img/product-banner.jpg" />
    <div v-if="goodsId" class="product-detail">
      <div class="detail-top">
        <img class="main-img" :src="goodsDetail.photo" />
        <!-- <img
          class="main-img"
          src="file:///Users/fangjiaojiao/Desktop/11.jpeg"
        /> -->
        <div class="top-right">
          <h1>{{ goodsDetail.name || "产品名称" }}</h1>
          <div class="top-right-li">
            所属分类：{{ goodsDetail.categoryName || "" }}
          </div>
          <div class="top-right-li">
            发布日期：{{ goodsDetail.createTime || "" }}
          </div>
        </div>
      </div>
      <div class="detail-list">
        <span>产品概述</span>
        <span>性能特点</span>
        <span>技术参数</span>
      </div>
      <div class="detail-content">
        <!-- 简介 -->
        <div class="number-align">
          <span class="product-number">■ {{ goodsDetail.number }}</span
          >{{ goodsDetail.categoryName || "" }}简介
        </div>
        <div>{{ goodsDetail.introduction || "" }}</div>
        <!-- 性能参数 -->
        <div class="number-align">
          <span class="product-number">■ {{ goodsDetail.number }}</span
          >{{ goodsDetail.categoryName || "" }}性能参数
        </div>
        <img class="prameter-img" :src="goodsDetail.parameterImg" />
        <div class="number-align">
          <span class="product-number">■ {{ goodsDetail.number }}</span
          >{{ goodsDetail.categoryName || "" }}型号说明
        </div>
        <div v-html="goodsDetail.description || ''"></div>
        <div
          v-if="
            goodsDetail.descriptionList &&
            goodsDetail.descriptionList.length > 0
          "
        >
          <div
            class="description-list"
            v-for="(item, index) in goodsDetail.descriptionList"
            :key="index"
          >
            <img class="" :src="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="product-content" v-else>
      <div class="about-content-left">
        <div class="title">产品中心</div>
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="listNum == index ? 'list-box list-box-active' : 'list-box'"
          @click="changeList(index, item.name, item.id)"
        >
          {{ item.name || "" }}
        </div>
      </div>
      <div class="about-content-right">
        <div class="title">
          {{
            listNum == null
              ? "服务介绍"
              : (list[listNum] && list[listNum].name) || ""
          }}
          <div class="maodian">
            <RouterLink to="/">首页</RouterLink> >服务介绍
          </div>
        </div>
        <div class="right-content">
          <div class="right-content-list right-content-list-all">
            <div
              class="content-list-box"
              v-for="(item, index) in goodsList"
              :key="index"
              @click="toDetail(item.id)"
            >
              <div class="img">
                <img :src="xieboImg" />
              </div>
              <h3>{{ item.name || "" }}</h3>
              <div class="btn">了解详情</div>
            </div>
          </div>
        </div>
        <div class="content-pagination-box">
          <el-pagination
            layout="prev, pager, next"
            :current-page="pageNum"
            :total="total"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted, watch } from "vue";
import { get } from "@/api/request";
import xieboImg from "@/assets/img/xiebo.jpg";
import scaImg from "@/assets/img/sca.jpg";
import sifuImg from "@/assets/img/sifu.jpg";

const router = useRouter();
const route = useRoute();
// 路由带过来的商品id
let goodsId = ref(null);
// 分类索引
let listNum = ref(null);
// 当前分类名称
let typeName = ref("");
// 当前分类id
let typeId = ref(null);
// 分类列表
let list = reactive(null);
// 商品列表
let goodsList = reactive([]);
// 页码
let pageNum = ref(1);
// 商品总数
let total = ref(0);
// 商品详情对象
let goodsDetail = reactive({
  name: "",
  photo: "",
  createTime: "",
  categoryName: "",
  descriptionList: null,
});

const changeList = (index, name, id) => {
  listNum.value = index;
  typeName.value = name;
  typeId.value = id;
  getGoodsList(1, 10, id);
};
watch(
  () => route.query.id,
  (newId) => {
    goodsId.value = newId;
    console.log("监听到了新路由");
  },
  {
    immediate: true,
  }
);

onMounted(() => {
  goodsId.value = route.query.id || "";
  if (route.query.id) {
    getGoodsDetail();
  } else {
    getTypeList();
  }
});

const toDetail = (id) => {
  // debugger;
  console.log(this, "thissssss");
  // const router = useRouter();
  router.push({ name: "product", query: { id: id } });
};

// 切换分页
const handleCurrentChange = (val) => {
  if (val !== pageNum.value) {
    getGoodsList(val, 10, typeId.value);
  }
};
// 查询所有产品分类
const getTypeList = () => {
  get("/api/category/list")
    .then((res) => {
      console.log(res, "fenlei");
      if (res && res.length > 0) {
        list = res;
        getGoodsList(1, 10);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// 查询商品详情
const getGoodsDetail = async () => {
  get(`/api/product/${goodsId.value}`)
    .then((res) => {
      console.log(res, "rouuuuuu");
      const {
        name,
        photo,
        createTime,
        categoryName,
        introduction,
        number,
        parameterImg,
        description,
        productDetails,
      } = res || {};
      goodsDetail.name = name;
      goodsDetail.photo = `file:///mnt/upload/${photo}`;
      // goodsDetail.photo = `file:///Users/fangjiaojiao/Desktop/11.jpeg`;
      goodsDetail.createTime = createTime;
      goodsDetail.categoryName = categoryName;
      goodsDetail.introduction = introduction;
      goodsDetail.number = number;
      goodsDetail.parameterImg = `file:///mnt/upload/${parameterImg}`;
      // goodsDetail.parameterImg = `file:///Users/fangjiaojiao/Desktop/11.jpeg`;
      goodsDetail.description = description;
      if (productDetails && productDetails.length > 0) {
        let arr = productDetails.map((item) => {
          let urls = `file:///mnt/upload/${item.imageUrl || ""}`;
          return urls;
        });
        goodsDetail.descriptionList = arr;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// 查询当前分类下的商品（分页）
const getGoodsList = async (page, pageSize, id) => {
  const obj = { page, pageSize, categoryId: id };
  get(`/api/product/page`, obj).then((res) => {
    goodsList = res.records || [];
    total.value = res.total;
  });
};

// 获取动态图片路径
const images = import.meta.glob("@/assets/img/*.jpg");
const getImageUrl = (name) => {
  return images(`@/assets/img/${name}.jpg`)?.default;
};

// const getImageUrl = (name) => {
//   return new URL(`../assets/images/${name}.jpg`, import.meta.url).href;
// };
</script>
<style lang="scss" scoped>
.product {
  width: 100%;
  height: 100%;
  .product-detail {
    color: #333;
    .detail-top {
      display: flex;
      justify-content: space-between;
      .main-img {
        width: 399px;
        margin-right: 20px;
        margin-bottom: 20px;
      }
      .top-right {
        flex: 1;
        h1 {
          border-bottom: 1px solid #eee;
        }
        .top-right-li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
      }
    }
    .detail-list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 1px solid #ededed;
      padding: 10px 0;
    }
    .detail-content {
      .number-align {
        display: flex;
        align-items: center;

        .product-number {
          font-size: 28px;
          font-weight: bold;
        }
      }
      .prameter-img {
        width: 653px;
      }
      .description-list {
        text-align: center;
        img {
          width: 1162px;
        }
      }
    }
  }
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
          &:hover {
            .btn {
              background: #00b7f3;
              border: none;
            }
          }
          h3 {
            text-align: center;
            margin-top: 20px;
          }
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
      .content-pagination-box {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        .el-pagination {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
