<template>
   <div class="login">
        <div class="infoForm">
            <div class="title">
                <div class="title-symbol"></div>
                <div class="title-text">账号登录</div>
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field
                        v-model="state.username"
                        name="用户名"
                        placeholder="用户名"
                        left-icon="manager-o"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="state.password"
                        type="password"
                        name="密码"
                        left-icon="question-o"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
                <van-button class="login-btn" round block type="primary" native-type="submit">
                    登录
                </van-button>
            </van-form>
        </div>
   </div>
</template>

<script setup lang="ts" name="login">
import { reactive } from 'vue';
import { Session } from '@/utils/storage';
import router from '@/router';
const state = reactive({
    username: '',
    password: '',
});
const onSubmit = (values: any) => {
    console.log(values);
    Session.set('token', "values  weqweqweqwedsafasgg");
    router.push('/');
};
</script>
<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/homeBg.png');
    background-size: cover;
    .infoForm {
        width: 90%;
        height: fit-content;
        border-radius: 15px;
        background-color: white;
        position: absolute;
        top: calc(50% - 125px);
        right: 0;
        left: 0;
        margin: auto;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
        .title {
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
            .title-symbol {
                width: 72px;
                height: 6px;
                border-radius: 3px;
                background-color: purple;
                margin: 10px 0 5px calc(50% - 36px);
            }
            .title-text {
                font-size: 18px;
                font-weight: bolder;
            }
        }
        .login-btn {
            width: calc(100% - 32px);
            margin: 16px;
        }
    }
}
</style>

