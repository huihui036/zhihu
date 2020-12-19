<template>
  <teleport to='#model'>
    <div v-if="isOpen">
      <h2>
        <slot>this is model</slot>
      </h2>
      <button @click="buttenClick">clsoe Model</button>
    </div>
  </teleport>
</template>

<script  lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Model",
  props: {
    isOpen: Boolean,
  },
  emits: {
    "close-model": null,
  },
  setup(props, context) {
    const buttenClick = () => {
      context.emit("close-model");
    };
    return {
      buttenClick,
    };
  },
});
</script>

 <!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped >
</style>