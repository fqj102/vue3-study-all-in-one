<template>
  <h1>vue3</h1>
  <span>
    {{ hello }}<br />
    <div>count: {{ count }}, double: {{ double }}</div>
    <button @click="increase">increase</button>
  </span>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const hello = ref("helloworld");

    const count = ref(0);
    const double = computed(() => {
      return count.value * 2;
    });

    const increase = () => {
      count.value++;
    };

    return {
      hello,
      count,
      double,
      increase,
    };
  },
});
</script>
<style scoped lang="css"></style>
