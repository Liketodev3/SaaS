<template>
    <div>
        <div class="register_container">
            <div class="register_left-side">
                <router-link to="/">
                    <div class="register_title">
                        SmartHire
                    </div>
                </router-link>
                <div class="register_left-content white_c">
                    <img src="@/assets/images/signUp_img.svg" alt="signUp_img">
                </div>
            </div>
            <div class="register_right-side">
                <div class="account_text">
                    <div class="dont_have">
                        Already have an account?  <router-link to="/login"><span class="sign_text"> Login</span></router-link>
                    </div>
                </div>
                <div class="register_right-side-content">
                    <div class="welcome_title">
                        Create account
                    </div>
                    <div class="input_item">

                        <label >Username</label>
                        <b-form-input
                                id="userName"
                                v-model="userName"
                                type="text"
                                trim
                        ></b-form-input>
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
                    <div class="dual_inputs">
                        <div class="dual_input_item">
                            <label >Password</label>
                            <b-form-input
                                    id="password"
                                    :type="r_pass"
                                    v-model="password"
                                    trim
                            ></b-form-input>
                            <div class="eye_close" @click="showPassword('r_pass')"></div>

                        </div>
                        <div class="dual_input_item">
                            <label >Confirm</label>
                            <b-form-input
                                    id="confirm"
                                    :type="r_confirm"
                                    v-model="confirm"
                                    trim
                            ></b-form-input>
                            <div class="eye_close" @click="showPassword('r_confirm')"></div>

                        </div>
                    </div>

                    <div class="d-flex mt-4 mb-5">
                        <div class="agree_terms">
                            <input type="checkbox" id="agree_terms" class="mt-1">
                            <label for="agree_terms">By creating an account, you agree to the Terms of Service and conditions and Privacy Policy.</label>
                        </div>

                    </div>
                    <b-button variant="primary" class="register_btn">Sign Up</b-button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                userName: '',
                email: '',
                password: '',
                confirm : '',
                r_pass: 'password',
                r_confirm: 'password'
            }
        },
        methods: {
            showPassword(item) {
                if(item === 'r_pass') {
                    if(this.r_pass === 'password') {
                        this.r_pass = 'text'
                    } else {
                        this.r_pass = 'password'
                    }
                } else {
                    if(this.r_confirm === 'password') {
                        this.r_confirm = 'text'
                    } else {
                        this.r_confirm = 'password'
                    }
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .register {
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
                    color: #096BC4;
                    padding: 20px 0;
                }
                & .input_item {
                    width: 100%;
                    margin-top: 20px;
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
                & .dual_inputs {
                    width: 100%;
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    & .dual_input_item {
                        width: 250px;
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

                }
                & .agree_terms {
                    display: flex;
                    & label {
                        margin-left: 15px !important;
                        color: #07054E;
                        font-size: 16px;
                    }
                }

                & .register_btn {
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
            padding: 140px 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            & img {
                background-position: center;
                position: relative;
            }

        }

    }
</style>