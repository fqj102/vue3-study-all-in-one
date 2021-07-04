<template>
  <teleport to="body">
    <div id="loading">
      {{ text || "loading" }}
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
export default defineComponent({
  name: "Loader",
  props: {
    text: {
      type: String,
    },
    background: {
      type: String,
    },
  },
  setup() {
    //     const node = document.createElement("div");
    //     node.id = "back";
    //     node.textContent = "loading...";
    //     document.body.appendChild(node);
    //     onUnmounted(() => {
    //       document.body.removeChild(node);
    //     });
  },
});
</script>
<style scoped lang="css">
#loading {
  position: absolute;
  background-color: antiquewhite;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
  width: 50px;
  height: 50px;
  border: 1px solid red;
  z-index: 1000;
}
</style>
