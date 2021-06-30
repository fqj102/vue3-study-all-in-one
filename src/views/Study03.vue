<template>
  <div>
    <ul>
      <li v-for="data in messages" :key="data">{{ data }}</li>
    </ul>
    {{ messages }}
  </div>
  <div>
    <button @click="updated">update</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onRenderTracked,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    document.title = "lifecycle";
    //beforeCreate

    //created

    const messages = reactive([] as string[]);

    onBeforeMount(() => {
      messages.push("onBeforeMount..");
    });
    onMounted(() => {
      messages.push("onMounted..");
    });
    onBeforeUpdate(() => {
      messages.push("beforeupdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    // // debug tool
    // onRenderTracked((event) => {
    //   console.log("onRenderTracked", event);
    // });

    // const updated = (target) => {
    //   console.log(target);
    // };

    return {
      messages,
      //updated,
    };
  },
});
</script>
<style scoped lang="css"></style>
