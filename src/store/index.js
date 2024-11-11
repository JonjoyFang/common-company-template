import { createStore } from "vuex";
const store = createStore({
  state: {
    //状态管理器中定义的数据源
    routerIndex: 0,
  },
  mutations: {
    //同步操作
  },
  actions: {
    //异步操作
  },
  //getters相当于计算属性
  getters: {},
});
export default store;
