<template>
  <div class="container">
    <div class="row">
        <a-card hoverable style="width: 300px" 
           v-for="colunm in list"
           :key="colunm.id">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template class="ant-card-actions" #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta title="Card title" :description="colunm.title">
      <template #avatar>
        <a-avatar :src="colunm.avater" />
      </template>
    </a-card-meta>
  </a-card>

    </div>


  </div>

</template>

<script  lang='ts'>
import { defineComponent, PropType } from "vue";
export interface ColunmPros {
  id: number;
  title: string;
  avater: string;
  description: string;
}
export default defineComponent({
  name: "ColumList",
  props: {
    list: {
      type: Array as PropType<ColunmPros[]>,
      required: true
    }
  }
});
</script>

 <!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped >
</style>