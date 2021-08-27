<template>
  <div>
    <NavBar />
    <div class="home">
      Coming Soon
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

import NavBar from "../components/NavBar";
export default {
  name: 'Home',
  components: {
    NavBar

  }
}
</script>
<style scoped lang="scss">
  .home {
    width: 100%;
    height: 100vh;
    background: transparent linear-gradient(180deg, #3E8ECB 0%, #096BC4 100%) 0% 0% no-repeat padding-box;
    display: flex;
    justify-content: center;
    padding-top: 70px;
    font-size: 50px;
    font-weight: 600;
  }

</style>
