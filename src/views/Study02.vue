<template>
  <div>{{ data.name }}-{{ data.age }}</div>
  <div>
    count: {{ data.count }} <br />
    double: {{ data.double }}
  </div>
  <div>
    <button @click="data.increase">increase</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
interface IData {
  count: number;
  double: number;
  increase: () => void;
}
export default defineComponent({
  name: "App",
  setup() {
    const data: IData = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
      name: "fqj",
      age: 20,
    });
    return {
      data,
    };
  },
});
</script>
<style scoped lang="css"></style>
