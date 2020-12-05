<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <p>{{count}}</p>
  <p>{{dubble}}</p>
  <button @click="increase">点击加1</button>
</template>

<script lang="ts">
import { ref,computed  } from 'vue';
//import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App', 
  setup() {
    const count = ref(0)

    const dubble =computed(()=>{
    return  count.value*3
    })
    const increase=()=>{

    count.value++;

    }
    return {
      count,increase,dubble
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
