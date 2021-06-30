<template>
  <div>x:{{ x }},y{{ y }}</div>
  <div>
    <button @click="mouseClick">click</button>
    <br />
    click window change mourse position
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    //document.title = "buyong mixin , eryong mokuaihua";
    document.title = "鼠标位置, 模块化";

    const x = ref(0);
    const y = ref(0);
    const mouseClick = (event: MouseEvent) => {
      x.value = event.pageX;
      y.value = event.pageY;
    };
    onMounted(() => {
      document.addEventListener("click", mouseClick);
    });
    onUnmounted(() => {
      document.removeEventListener("click", mouseClick);
    });
    return {
      x,
      y,
      mouseClick,
    };
  },
});
</script>
<style scoped lang="css"></style>
