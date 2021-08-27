<template>
    <div>
        <div class="login_container">
            <div class="login_left-side">
                <router-link to="/">
                    <div class="login_title">
                        SmartHire
                    </div>
                </router-link>
                <div class="login_left-content white_c">
                    <div class="login_subtitle">
                        Lorem Ipsetting industry.
                    </div>
                    <div class="login_sub">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>

                    <div class="d-flex my-4">
                        <img class="item_img" src="@/assets/images/phone.svg" alt="phone_img">
                        <div class="login_item">
                            <div class="login_item-text">Lorem Ipsum</div>
                            <div class="login_item-txt">Lorem Ipsum is simply dummy text of the</div>
                        </div>
                    </div>
                    <div class="d-flex my-4">
                        <img class="item_img" src="@/assets/images/computer.svg" alt="computer_img">
                        <div class="login_item">
                            <div class="login_item-text">Lorem Ipsum</div>
                            <div class="login_item-txt">Lorem Ipsum is simply dummy text of the</div>
                        </div>
                    </div>
                    <div class="d-flex my-4">
                        <img class="item_img" src="@/assets/images/calendar.svg" alt="calendar_img">
                        <div class="login_item">
                            <div class="login_item-text">Lorem Ipsum</div>
                            <div class="login_item-txt">Lorem Ipsum is simply dummy text of the</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="login_right-side">
                <div class="account_text">
                    <div class="dont_have">
                        Don't have an account? <router-link to="/register"><span class="sign_text"> Sign Up</span></router-link>
                    </div>
                </div>

                <div class="login_right-side-content">
                    <div class="welcome_title">
                        Welcome to <span class="harvest">Harvest</span>
                    </div>
                    <div class="input_item">

                        <label >Email</label>
                        <b-form-input
                                id="email"
                                v-model="email"
                                type="email"
                                trim
                        ></b-form-input>
                    </div>
                    <div class="input_item">
                        <label >Password</label>
                        <b-form-input
                                id="password"
                                :type="l_password"
                                v-model="password"
                                trim
                        ></b-form-input>
                        <div class="eye_close" @click="showPassword()"></div>

                    </div>
                    <div class="d-flex justify-content-between mt-4 mb-5">
                        <div class="remember">
                            <input type="checkbox" id="check_remember">
                            <label for="check_remember">Remember me</label>

                        </div>
                        <div class="forget">
                            Forgot your password?
                        </div>

                    </div>
                    <b-button variant="primary" class="login_btn">Log In</b-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
                l_password: 'password'
            }
        },
        methods: {
            showPassword() {
                if(this.l_password === 'password') {
                    this.l_password = 'text'
                } else {
                    this.l_password = 'password'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.login {
    &_container {
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        width: 100%;
        height: 100vh;
        border: 1px solid lightgray;
        background: #fff;
        display: flex;
    }
    &_left-side {
        width: 50%;
        background: transparent linear-gradient(180deg, #096BC4 0%, #3E8ECB 100%) 0 0 no-repeat padding-box;
        border-radius: 0 30px 30px 0;
        padding: 65px 65px 0 140px;
        height: 100%;
        & a {
            text-decoration: none;
            &:hover {
                text-decoration: none;
            }
        }
    }
    &_right-side {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        & .account_text {
            width: 100%;
            padding: 50px 150px;
            display: flex;
            justify-content: flex-end;
            & .dont_have {
                color: #000;
                font-weight: 600;
                font-size: 18px;
                & .sign_text {
                    color: #096BC4;
                }
            }
        }
        &-content {
            max-width: 550px;
            width: 100%;
            height: 100%;
            display: flex;
            padding: 0 20px 40px;
            justify-content: center;
            flex-direction: column;
            & .welcome_title {
                font-size: 35px;
                font-weight: 600;
                color: #07054E;
                padding: 20px 0;
                & .harvest {
                    color: #096BC4;
                }
            }
            & .input_item {
                width: 100%;
                margin-top: 20px;
                position: relative;
                & .eye_close {
                    position: absolute;
                    width: 30px;
                    height: 20px;
                    right: 15px;
                    top: 33px;
                    background-image: url("~@/assets/images/eye_close.svg");
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                }
                & label {
                    color: #07054E;
                    font-weight: 600;
                    font-size: 16px;

                }
                & input {
                    background: #F6F6F6 0 0 no-repeat padding-box;
                    &:focus {
                        box-shadow: none;
                        border: 1px solid #096BC4;
                        border-radius: 3px;
                    }
                }
            }
            & .remember {
                & label {
                    margin-left: 15px !important;
                    color: #07054E;
                    font-size: 16px;
                }
            }
            & .forget {
                color: #07054E;
                font-size: 16px;
                font-weight: 400;
            }
            & .login_btn {
                height: 60px;
                background: #096BC4 0 0 no-repeat padding-box;
                border-radius: 10px;
                color: #fff;
                font-weight: 500;
            }
        }
    }
    &_title {
        color: #fff;
        font-size: 51px;
        font-weight: 500;
        line-height: 62px;
    }
    &_left-content {
        padding: 150px 30px;
       display: flex;
        flex-direction: column;
        justify-content: center;
        /*align-items: center;*/
        & .login_item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 30px;
            &-text {
                font-size: 18px;
                font-weight: 600;
            }
            &-text {
                font-size: 18px;
                font-weight: 400;
            }
        }
        & .item_img {
            width: 55px;
            height: 55px;
        }


    }
    &_subtitle {
        font-size: 35px;
        font-weight: 600;
        padding-bottom: 20px;
    }
    &_sub {
        width: 90%;
        word-wrap: break-word;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 50px;
    }
}

</style>