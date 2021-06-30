<template>
  <div>{{ name }}-{{ age }}</div>
  <div>
    count: {{ count }} <br />
    double: {{ double }} <br />
    <div>
      <ul>
        <li v-for="number in numbers" :key="number">{{ number }}</li>
      </ul>
    </div>
    <div>perons:{{ person.name }}---------{{ person.age }}</div>
    <div>son:{{ person.child.name }}---------{{ person.child.age }}</div>
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
  numbers: number[];
  person: { name: string; age: number; child: { name: string; age: number } };
  increase: () => void;
}
export default defineComponent({
  name: "App",
  setup() {
    document.title = "reative object deep change";
    const data: IData = reactive({
      count: 0,
      increase: () => {
        data.numbers.push(Math.random() * 10);
        data.person.name = Math.random().toString();
        data.person.age = Math.round(Math.random() * 100);
        data.person.child.name = Math.random().toString();
        data.person.child.age = Math.round(Math.random() * 100);
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
      numbers: [0, 1, 2],
      person: {
        name: "daddy",
        age: 37,
        child: {
          name: "son",
          age: 10,
        },
      },
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
