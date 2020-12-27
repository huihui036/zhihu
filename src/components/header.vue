<template>
  <div class=" container">
  <a-row >
    <a-col :span="4">
     logo
    </a-col>
    <a-col :span="16">
   管理系统
    </a-col>
    <a-col :span="4">
     <is-longin></is-longin>
    </a-col>
  </a-row>

  </div>
</template>

<script  lang='ts'>
import { defineComponent, ref } from "vue";
import IsLongin from "./loginType.vue"
export default defineComponent({
  name: "Header",
  components: {
    IsLongin
  },
  props: {},
 
});
</script>

 <!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped >
</style>