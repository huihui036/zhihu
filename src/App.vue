<template>
  <img alt="Vue logo"
       src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <Model :isOpen="modelIsOpen"
         @close-model='closeModel'>my MODEK</Model>
  <button @click="openModel"> openModel</button>
  <p v-if="loading">加载中------</p>

  <img v-if="loaded"
       :src="result.message[0].image_src"
       width="200" />

  <p>{{count}}</p>

  <p>{{doubble}}</p>
  <p>x:{{x}},y:{{y}}</p>
  <p>a:{{mouseData.a}},b:{{mouseData.b}}</p>
  <button @click="increase">点击加1</button>
  <p>{{updata}}</p>
  <button @click="updatedMethod"> changetitel</button>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, watch } from "vue";
import useMousePoisition from "./hooks/useMousePosition";
import userUrlLorder from "./hooks/useAxios";
// import HelloWorld from "./components/HelloWorld.vue";
import Model from "./components/Model.vue";

interface DataProps {
  count: number;
  increase: () => void;
  doubble: number;
}
export default {
  name: "App",
  components: {
    // HelloWorld,
    Model,
  },
  setup() {
    const Data: DataProps = reactive({
      count: 0,
      increase: () => {
        Data.count++;
      },
      doubble: computed(() => {
        return Data.count * 2;
      }),
    });

    interface GetImageMate {
      msg: string;
      state: number;
    }
    interface GertImageMessage {
      image_src: string;
      open_type: string;
      goods_id: number;
      navigator: string;
    }
    interface GetImage {
      message: GertImageMessage[];
      meta: GetImageMate;
    }
    const updata = ref("");
    const { mouseData, x, y } = useMousePoisition();
    const { result, loading, loaded } = userUrlLorder<GetImage>(
      "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
    );
    console.log(mouseData);
    const updatedMethod = () => {
      updata.value += "upada";
    };

    watch(result, () => {
      console.log(result.value);
      if (result.value) {
        console.log(result.value.message[0]);
      }
    });
    watch([updata, () => Data.count], (newV, oldV) => {
      console.log("oldvale", oldV);
      console.log("newV", newV);

      document.title = "upadarta" + updata.value + Data.count;
    });
    const dataRefs = toRefs(Data);

    const modelIsOpen = ref(false);
    const openModel = () => {
      modelIsOpen.value = true;
    };
    const closeModel = () => {
      modelIsOpen.value = false;
    };
    return {
      ...dataRefs,
      updata,
      updatedMethod,
      x,
      y,
      mouseData,
      result,
      loading,
      loaded,
      openModel,
      closeModel,
      modelIsOpen,
    };
  },
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
