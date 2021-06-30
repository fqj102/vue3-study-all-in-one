<template>
  <div>title:{{ title }}</div>
  <div>data:{{ data }}</div>
  <div>
    <button @click="changeTitle">change title</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    document.title = "watch";
    const changeTitle = () => {
      title.value = Math.random() + "";
      data.name = data.name + "111";
      data.age = data.age + 10;
    };
    const title = ref("helloworld");
    const data = reactive({
      name: "fqj",
      age: 20,
    });
    watch(title, (newValue, oldValue) => {
      console.log("111 watting one ");
      console.log(title, newValue, oldValue);
      document.title = title.value;
    });

    watch([title, data], (newValue, oldValue) => {
      console.log("222 watting array multi filed");
      console.log(title, newValue, oldValue);
      document.title = title.value;
    });

    watch([title, () => data.name], (newValue, oldValue) => {
      console.log("333 watching reactive object property");
      console.log(title, newValue, oldValue);
      document.title = title.value;
    });

    return {
      changeTitle,
      title,
      data,
    };
  },
});
</script>
<style scoped lang="css"></style>
