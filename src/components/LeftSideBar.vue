<template>
    <div>
        <div class="b-sidebar">
            <div class="w-100">
                <div class="sidebar_title">SmartHire</div>
                <div class="sidebar_tabs">
                    <router-link to="/jobMain">
                        <div class="sidebar_tab-item" :class="{'active_tab': activeRoute === '/jobMain' }">
                            <b-icon icon="briefcase-fill" aria-hidden="true"></b-icon>
                            <span>Jobs</span>
                        </div>
                    </router-link>
                    <router-link to="/settings">
                        <div class="sidebar_tab-item" :class="{'active_tab': activeRoute === '/settings' }">
                            <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
                            <span>Settings</span>
                        </div>
                    </router-link>
                </div>
                <div class="w-100 d-flex justify-content-center">
                    <b-button class="add_job_btn">+ Add New Job</b-button>
                </div>
            </div>
            <div class="sidebar_tab-item">

                <b-icon icon="box-arrow-right" aria-hidden="true"></b-icon>
                <span>Log Out</span>

            </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: "LeftSideBar",
        data() {
            return {

            }
        },

        computed: {
            activeRoute() {
                return this.$route.fullPath;
            }
        }
    }
</script>

<style scoped lang="scss">
    .b-sidebar {
        width: 260px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 35px 0 65px;
        background: transparent linear-gradient(179deg, #07054E 0%, #083484 65%, #096BC4 100%) 0% 0% no-repeat padding-box;
        & .add_job_btn {
            background: transparent linear-gradient(102deg, #ABD7FF 0%, #D1E9FF 100%) 0% 0% no-repeat padding-box;
            box-shadow: 0px 0px 6px #00000029;
            border-radius: 10px;
            color: #07054E;
            font-weight: 600;
            padding: 12px 30px;
            border: none;
        }
    }

    .sidebar {
        &_title {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 33px;
            text-align: center;
            color: #fff;
        }

        &_tabs {
            padding: 64px 0;
            & a {
                text-decoration: none;
            }
            & .active_tab {
                background: #050433;
                border-right: 7px solid #4FA7F8;
            }
        }

        &_tab-item {
            width: 100%;
            height: 65px;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: 500;
            display: flex;
            padding: 0 45px;
            cursor: pointer;
            align-items: center;
            & span {
                margin-left: 30px;
            }
        }

    }
</style>