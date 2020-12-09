<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <p>{{count}}</p>
  <p>{{doubble}}</p>
  <p>x:{{x}},y:{{y}}</p>
  <p>a:{{mouseData.a}},b:{{mouseData.b}}</p>
  <button @click="increase">点击加1</button>
  <p>{{updata}}</p>
  <button @click="updatedMethod"> changetitel</button>
</template>

<script lang="ts">
import { ref, computed,reactive,toRefs,watch,onMounted,onUnmounted} from 'vue';
import useMousePoisition from './hooks/useMousePosition'
//import HelloWorld from './components/HelloWorld.vue';
interface DataProps{
  count: number;
  increase: () => void;
  doubble: number;
}
export default {
  name: 'App', 
  setup() {
    const Data: DataProps = reactive({
      count:0,
      increase: ()=> {Data.count++},
      doubble:computed(()=> {return Data.count*2} ),
    });

    const updata =ref('');
    const {mouseData,x,y} = useMousePoisition()
    console.log(mouseData)
    const updatedMethod =()=> {
      updata.value +='upada';
    };

    watch([updata, ()=>Data.count] ,(newV,oldV)=>{
      console.log("oldvale",oldV)
      console.log("newV",newV)
     document.title = 'upadarta'+ updata.value+Data.count;
    })
    const dataRefs = toRefs(Data)
    return {
      ...dataRefs,
      updata,
      updatedMethod,
      x,y,
      mouseData
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
