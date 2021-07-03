<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
async function hello() {
  return "hello";
}
async function hello1() {
  const greeting = await Promise.resolve("Hello1");
  return greeting;
}
export default defineComponent({
  name: "App",
  setup() {
    document.title = "async";
    hello().then((value) => console.log(value));
    hello1().then((value) => console.log(value));
    return {};
  },
});
</script>
<style scoped lang="css"></style>
