<template>
  <div>
    <h1 id="title"></h1>
    <div>
      <ColumnList :list="list" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import ColumnList from "@/components/ColumnList.vue";
import testdata from "../mock/testColumn.json";
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
  },
  setup() {
    return {
      list: testdata,
    };
  },
});
</script>
<style scoped lang="css"></style>
