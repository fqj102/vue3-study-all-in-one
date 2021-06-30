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
import useMoursePosition from "@/hooks/useMousePosition";
export default defineComponent({
  name: "App",
  setup() {
    //document.title = "buyong mixin , eryong mokuaihua";
    document.title = "鼠标位置, 模块化";

    const { x, y, mouseClick } = useMoursePosition();
    return {
      x,
      y,
      mouseClick,
    };
  },
});
</script>
<style scoped lang="css"></style>
