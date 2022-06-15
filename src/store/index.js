import { createStore } from 'vuex'


import ModuleUser from "@/store/user";
// vuex插件创建的
export default createStore({
  //存储数据
  state: {
  },
  //需要通过计算获取state里内容
  getters: {
  },
  //对state的直接修改操作放在此处
  mutations: {
  },
  //定义对state的操作
  actions: {
  },
  //对state进行分割
  modules: {
    user:ModuleUser
  }
})

//通过 store.state.user.username
