<template>
  <div id="app">
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <a-layout-content>
        <colum-list :list='list'></colum-list>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

  </div>
  </div>
</template>

<script lang='ts'>
import Header  from './components/header.vue'
import ColumList ,{ColunmPros}  from './components/ColumnList.vue'

const testData: ColunmPros[] = [
      { 
        id: 1,
        title: "string",
        avater: "string",
        description: "string"
      },
       { 
        id: 2,
        title: "string",
        avater: "string",
        description: "string"
      },
]
export default {
  name: 'App',
  components: {
    Header,
    ColumList
  },
  setup() {
    return {
      list:testData
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
</style>
