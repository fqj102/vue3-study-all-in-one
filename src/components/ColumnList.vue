<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  <div>
    <div v-for="column in list || []" :key="column.id" class="row">
      <div class="col-4">{{ column.id }}</div>
      <div class="col-4">{{ column.title }}</div>
      <div class="col-4">{{ column.avatar }}</div>
      <div class="col-4">{{ column.description }}</div>
    </div>
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
