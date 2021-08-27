<template>
    <div>
<!--        <h1>default</h1>-->
<!--        <NavBar />-->
        <slot></slot>
    </div>
</template>

<script>

    import NavBar from "../NavBar";
    export default {
        components: {NavBar}
    }

</script>

<style scoped>

</style>
