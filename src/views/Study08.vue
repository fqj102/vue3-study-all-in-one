<template>
  <div><img :src="dog" alt="" style="width:300px" /></div>
  <div><img :src="dog1" alt="" style="width:300px" /></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
export default defineComponent({
  name: "App",
  setup() {
    document.title = "axios loading";

    const store = useStore();
    const dog1 = computed(() => store.state.dogImg);
    const dog = ref(null);
    store.dispatch("getDog", "dog");
    onBeforeMount(() => {
      axios.get("/dog").then((resp) => {
        console.log(resp.data);
        dog.value = resp.data.message[0];
        console.log(dog.value);
      });
    });
    return {
      dog,
      dog1,
    };
  },
});
</script>
<style scoped lang="css"></style>
