<template>
  <div class="container">
    <div class="row">
      <div v-for="colunm in list"
           :key="colunm.id"
           class="col-4 my-3">
        <div class="card d-flex position-relative"
             style="width: 18rem;">
          <img :src="colunm.avater"
               :alt="colunm.title"
               class="flex-shrink-0 me-3">
          <div class="card-body">

            <h5 class="card-title">{{colunm.title}}</h5>
            <p class="card-text">{{colunm.description}}</p>
            <a href="#"
               class="btn btn-primary">进入专栏</a>
          </div>
        </div>

      </div>

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