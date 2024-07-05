<template>
    <div class="main">
        <div class="body">
            <vs-row>
                <vs-col>
                    <h1 class="title">主页</h1>
                </vs-col>
                <vs-col class="top_button">
                    <vs-button class="button" style="width: 7.4vw; height: 5vh; position: absolute; right: 2vw; top: 3vh; letter-spacing: 0.4vw; font-size: 1vw; background-color: rgba(204, 185, 55, 0.85)" @click="goLogin">登录</vs-button>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :sm="6" class="main_button">
                    <!-- 怎么让按钮的宽度随字的长度自适应更改 -->
                    <vs-button class="button" style="width: 10vw; letter-spacing: 0.3vw; font-size: 1vw; background-color: rgba(204, 185, 55, 0.85)" @click="queryUserInfo(userId)">生成二维码</vs-button>
                    <vs-button class="button" style="width: 10vw; letter-spacing: 0.3vw; font-size: 1vw; background-color: rgba(204, 185, 55, 0.85)" @click="goShow">效果预览</vs-button>
                </vs-col>
            </vs-row>
        </div>
    </div>
</template>

<script>
import user from '@/api/user';

export default {
    name: 'LoginPage',
    components: {},
    data() {
        return {};
    },
    created() {},
    mounted() {},
    updated() {},
    methods: {
        goLogin() {
            this.$router.push('Login');
        },
        goShow() {
            this.$router.push('Show');
        }
    }
};
</script>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    background: url(/public/statisc/background.jpg);
}
.body {
    width: 97vw;
    height: 95vh;
    justify-content: center;
    background-color: rgba(236, 244, 225, 0.86); /* rgba(236, 244, 225, 0.86);**/
    border-radius: 25px;
}
.top_button {
    display: flex;
    align-items: center;
}
.title {
    margin-top: 6vh;
    justify-content: center;
    text-align: center;
    font-size: 2.5vw;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 550;
    color: #2d3d1bcd;
    letter-spacing: 0.2vw;
}
.main_button {
    margin: 0 auto;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 垂直方向布局 */
    justify-items: center;
}
.button:hover {
    transform: scale(1.05);
    box-shadow: 0px 3px 5px #94ab6974;
    background-color: rgba(153, 181, 68, 0.767);
}
</style>
