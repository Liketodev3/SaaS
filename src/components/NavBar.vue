<template>
    <div>
        <div class="nav_container">
            <ul>
                <router-link to="/login">
                    <li>Login</li>
                </router-link>

                <router-link to="/register">
                    <li>Register</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">
.nav_container {
    width: 100%;
    height: 80px;
    background: transparent linear-gradient(180deg, #096BC4 0%, #3E8ECB 100%) 0% 0% no-repeat padding-box;
    display: flex;
    justify-content: center;
    align-items: center;
    & ul {
        display: flex;
        text-decoration: none;
        & a {
            margin: 0 20px;
            text-decoration: none;
            list-style-type: none;
            color: #fff;
            font-weight: 600;
            font-size: 20px;
        }
    }
}
</style>