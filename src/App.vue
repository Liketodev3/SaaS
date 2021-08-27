<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
<!--    <div id="nav">-->
<!--      <NavBar />-->

<!--&lt;!&ndash;      <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--    </div>-->
<!--    <router-view/>-->
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  export default {
    components: {
      NavBar
    },
    computed: {
      layout() {
        return this.$route.meta.layout ? `${this.$route.meta.layout}-layout` : 'default-layout'
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}
  .white_c {
    color: #fff;
  }
</style>
