<template>
  <h1 v-if="isLoading">Loading...</h1>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/study">study</router-link> |
    <router-link to="/study02">study02</router-link> |
    <router-link to="/study03">study03</router-link> |
    <router-link to="/study04">study04</router-link> |
    <router-link to="/study05">study05</router-link> |
    <router-link to="/study06">study06 {{ count }}</router-link> |
    <router-link to="/study07">study07</router-link> |
    <router-link to="/study08">study08</router-link> |
    <router-link to="/study09">study09</router-link> |
    <router-link to="/study10">study10</router-link> |
  </div>
  <router-view />
</template>
<script type="ts">
import {useStore} from "vuex";
import {computed, defineComponent} from "vue";
export default defineComponent({

  setup(props) {
    console.log(props);
    const store = useStore();
    const isLoading = computed(()=>store.state.isLoading);
    const count = computed(()=> store.state.count);
    console.log("App.vue");
    return {
      count,
      isLoading
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
