<template>
  <div v-if="!isLoading">
    <div><img :src="dog1" alt="" style="width:300px" /></div>
    <div><img :src="dog" alt="" style="width:300px" /></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  ref,
  computed,
  onUnmounted,
  onBeforeUnmount,
} from "vue";
import axios, { AxiosInstance } from "axios";
import { useStore } from "vuex";
export default defineComponent({
  name: "App",
  setup() {
    document.title = "axios loading";

    const store = useStore();
    const isLoading = computed(() => store.state.isLoading);
    let dog1 = computed(() => store.state.dogImg);
    console.log("1111", store.state.dogImg);
    let dog = ref(null);
    onBeforeMount(() => {
      store.dispatch("getDog", "dog");
      axios.get("/dog").then((resp) => {
        console.log(resp.data);
        dog.value = resp.data.message[0];
        console.log(dog.value);
      });
    });

    onBeforeUnmount(() => {
      dog1 = computed(() => "");
      dog = ref(null);
    });
    return {
      dog,
      dog1,
      isLoading,
    };
  },
});
</script>
<style scoped lang="css"></style>
