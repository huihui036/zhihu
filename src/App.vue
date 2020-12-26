<template>
  <div>
    <Header></Header>
    <columen-list :list="list"></columen-list>
  </div>
</template>




<script lang="ts">
import { defineComponent } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";

import ColumenList, { ColunmPros } from "./components/ColumnList.vue";
import Header from "./components/header.vue";
const listData: ColunmPros[] = [
  {
    id: 1,
    title: "标题1",
    avater: "https://cn.vuejs.org/images/logo.png",
    description:
      "我们为新版的 vue-cli 准备了相应的 Element 插件，你可以用它们快速地搭建一个基于 Element 的项目。"
  },
  {
    id: 1,
    title: "标题1",
    avater: "https://cn.vuejs.org/images/logo.png",
    description:
      "我们为新版的 vue-cli 准备了相应的 Element 插件，你可以用它们快速地搭建一个基于 Element 的项目。"
  },
  {
    id: 1,
    title: "标题1",
    avater: "https://cn.vuejs.org/images/logo.png",
    description:
      "我们为新版的 vue-cli 准备了相应的 Element 插件，你可以用它们快速地搭建一个基于 Element 的项目。"
  },
  {
    id: 1,
    title: "标题1",
    avater: "https://cn.vuejs.org/images/logo.png",
    description:
      "我们为新版的 vue-cli 准备了相应的 Element 插件，你可以用它们快速地搭建一个基于 Element 的项目。"
  }
];
export default defineComponent({
  name: "App",
  components: {
    ColumenList,
    Header
  },
  setup() {
    return {
      list: listData
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
