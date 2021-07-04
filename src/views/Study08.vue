<template>
  <div v-if="!isLoading" style=" position:absolute;left:40%">
    <div class="card h-100 shadow-sm" style="width: 18rem;">
      <img class="card-img-top" :src="dog1" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="card h-100" style="width: 18rem;">
      <img class="card-img-top" :src="dog" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
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
