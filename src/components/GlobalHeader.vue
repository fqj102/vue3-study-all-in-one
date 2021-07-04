<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand">Navbar</a>
    <ul class="list-inline mb-0">
      <li class="list-inline-item" v-if="!user.isLogin">
        <a href="#" class="btn">login</a>
      </li>
      <li class="list-inline-item" v-if="user.isLogin">
        <a href="#" class="btn">logout</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "App",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
});
</script>
<style scoped lang="css"></style>
