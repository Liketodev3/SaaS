<template>
    <div>
        <b-row class="no-gutters">
            <b-col cols="2" class="sidebar_container">
                <LeftSideBar/>
            </b-col>
            <b-col class="main_content">
                <div class="user_component">
                    <div class="bell_notifications">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25.073" height="30.088"
                             viewBox="0 0 25.073 30.088">
                            <defs>
                            </defs>
                            <g transform="translate(-2)">
                                <path class="a_bell"
                                      d="M26.294,21.2a8.4,8.4,0,0,1-2.982-6.425v-3.5A8.783,8.783,0,0,0,15.79,2.608V1.254a1.254,1.254,0,1,0-2.507,0V2.608a8.781,8.781,0,0,0-7.522,8.675v3.5a8.406,8.406,0,0,1-2.994,6.435,2.193,2.193,0,0,0,1.427,3.86H24.879a2.194,2.194,0,0,0,1.415-3.87Z"/>
                                <path class="a_bell"
                                      d="M12.932,24.761A4.709,4.709,0,0,0,17.538,21H8.326A4.709,4.709,0,0,0,12.932,24.761Z"
                                      transform="translate(1.605 5.327)"/>
                            </g>
                        </svg>
                    </div>
                    <div class="user_img">
                        <img :src="img" alt="">
                    </div>
                    <div class="user_name">Name Surname</div>

                </div>
                <b-row class="no-gutters">
                    <b-col cols="12">
                        <slot></slot>
                    </b-col>
                </b-row>

            </b-col>
        </b-row>
    </div>

</template>

<script>
import img from '/src/assets/images/user_image.png'
    import LeftSideBar from "../LeftSideBar";

    export default {
        components: {
            LeftSideBar,
        },
        data() {
            return {
                img
            }
        }
    }
</script>

<style scoped lang="scss">
    .sidebar_container {
        width: 260px;
    }

    .main_content {
        position: relative;

        & .user_component {
            position: absolute;
            top: 0;
            right: 0;
            height: 85px;
            display: flex;
            align-items: center;
            padding: 0 45px;
            & .bell_notifications {
                & .a_bell {
                    fill: #050433;
                }
            }
            & .user_img {
                width: 50px;
                height: 50px;
                margin: 0 20px;
                &  img {
                    width: 50px;
                    height: 50px;
                }
            }
            & .user_name {
                color: #07054E;
                font-weight: 500;
            }


        }
    }

    .no-gutters {
        --bs-gutter-x: 0;

    }
</style>
