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
          @click="changeList(index, item.name)"
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
            >
              <div class="img">
                <img :src="xieboImg" />
              </div>
              <div class="btn">了解详情</div>
            </div>
          </div>
        </div>
        <div class="content-pagination-box">
          <el-pagination
            layout="prev, pager, next"
            :current-page="pageNum"
            :total="total"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { get } from "@/api/request";
import xieboImg from "@/assets/img/xiebo.jpg";
import scaImg from "@/assets/img/sca.jpg";
import sifuImg from "@/assets/img/sifu.jpg";
// 分类索引
let listNum = ref(null);
// 当前分类名称
let typeName = ref("");
// 分类列表
let list = reactive(null);
// 商品列表
let goodsList = reactive([]);
// 页码
let pageNum = ref(1);
// 商品总数
let total = ref(0);

const changeList = (index, name) => {
  listNum.value = index;
  typeName.value = name;
  getGoodsList(1, 10, name);
};

onMounted(() => {
  getTypeList();
});

// 查询所有产品分类
const getTypeList = () => {
  get("/api/category/list")
    .then((res) => {
      console.log(res, "fenlei");
      if (res && res.length > 0) {
        list = res;
        listNum.value = 0;
        typeName.value = res[0].name;
        getGoodsList(1, 10, res[0].name);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// 查询商品详情
const getGoodsDetail = async (id) => {
  const data = await get(`/api/product/${id}`);
  return data || [];
};
// 查询当前分类下的商品（分页）
const getGoodsList = async (page, pageSize, name) => {
  const obj = { page, pageSize, name };
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
