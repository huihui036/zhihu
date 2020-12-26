<template>
  <div class=" container">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <div class="d-flex">
          <button type="button"
                  class="btn btn-primary">Primary</button>
          <button type="button"
                  class="btn btn-secondary mb-3">Secondary</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script  lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  props: {}
});
</script>

 <!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped >
</style>