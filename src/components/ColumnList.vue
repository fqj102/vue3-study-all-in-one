<template>
  <div>
    <ul v-for="column in list || []" :key="column.id">
      <li>{{ column.id }}</li>
      <li>{{ column.title }}</li>
      <li>{{ column.avatar }}</li>
      <li>{{ column.description }}</li>
    </ul>
    <a-table :columns="columns1" :data-source="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
const columns1 = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "avatar",
    dataIndex: "avatar",
    key: "avatar",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
];

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>, //构造函数断言成类型
      require: true,
    },
  },
  setup(props) {
    return {
      columns1,
    };
  },
});
</script>
<style scoped lang="css"></style>
