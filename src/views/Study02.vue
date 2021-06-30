<template>
  <div>{{ name }}-{{ age }}</div>
  <div>
    count: {{ count }} <br />
    double: {{ double }}
  </div>
  <div>
    <button @click="increase">increase</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
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
      ...toRefs(data),
    };
  },
});
</script>
<style scoped lang="css"></style>
