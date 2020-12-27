<template>

  <div>
    <a-row  v-if="islogin">
      <a-col :span="6">
        <a-button type="primary">注册</a-button>
      </a-col>
      <a-col :span="8">   
        <a-button>登入</a-button>
      </a-col>
  </a-row>
  <a-row v-else>
      <a-col :span="12">
        <p >用户名</p>
      </a-col>
   
  </a-row>

</div>
</template>

<script  lang='ts'>
import { defineComponent ,ref} from 'vue';
  export default defineComponent({
  name: 'IsLongin',
  props: {
  },
   setup(){
    const islogin = ref(true);
    return{
      islogin
    }
  }
});
</script>

 <!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped >
</style>