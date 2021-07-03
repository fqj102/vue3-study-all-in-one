<template>
  <div>
    <span>count:{{ count }}</span> <br />
    <span>count1: {{ count1 }}</span
    ><br />
    <span>doublecount: {{ doublecount }}</span
    ><br />
    <span>usercount: {{ usercount }}</span>
    <br />
    <button @click="clickbutton">button</button>
    <br />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, onMounted, computed } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    document.title = "store";
    const store = useStore();
    const count1 = store.state.count;
    const count = computed(() => store.state.count);
    const doublecount = computed(() => store.getters.double);
    const user = store.state.user;
    console.log("user", user);
    const usercount = computed(() => store.state.user.count);
    store.dispatch("increment"); //action
    const clickbutton = () => {
      store.commit("increment"); //mutation
      console.log("==222===");
    };
    onMounted(() => {
      console.log("==111===");
    });
    return {
      clickbutton,
      count,
      count1,
      onMounted,
      doublecount,
      usercount,
    };
  },
});
</script>
<style scoped lang="css"></style>
