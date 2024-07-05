<template>
    <div class="main">
        <div class="body">
            <vs-row>
                <vs-col>
                    <h1 class="title">登录</h1>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :sm="6" class="main_input">
                    <vs-input v-model="userId" type="text" style="width: 17vw; background-color: rgba(204, 203, 55, 0.35)" label="账号" label-float required />
                    <vs-input v-model="password" :type="passwordVisible ? 'text' : 'password'" style="width: 17vw; background-color: rgba(220, 215, 15, 0.35)" label="密码" label-float required />
                    <!-- <vs-button type="button" class="toggle-password" @click="togglePasswordVisibility">{{ passwordVisible ? '隐藏' : '显示' }}</vs-button> -->
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :sm="6" class="main_button">
                    <vs-button class="button" style="width: 7.4vw; letter-spacing: 0.4vw; font-size: 1vw; background-color: rgba(204, 185, 55, 0.85)" @click="queryUserInfo(userId)">登录</vs-button>
                    <vs-button class="button" style="width: 7.4vw; letter-spacing: 0.4vw; font-size: 1vw; background-color: rgba(204, 185, 55, 0.85)" @click="queryUserInfo(userId)">注册</vs-button>
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
        return {
            userId: '', // 初始化用户ID变量
            password: '' // 初始化密码变量
        };
    },
    created() {},
    mounted() {},
    updated() {},
    methods: {
        async queryUserInfo(userId) {
            const userInfo = await user.getUserInfo({ userId });
            this.userInfo = userInfo[0]; //这是一个可以照抄的函数逻辑示例（无实际意义，写完别的可以把这个删掉）
        }
    }
};
</script>

<style scoped>
/* 背景设置 */
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

/* 主体设置 */
.body {
    width: 40vw;
    height: 50vh;
    justify-content: center;
    background-color: rgba(236, 244, 225, 0.86); /* rgba(236, 244, 225, 0.86);**/
    border-radius: 25px;
}

/* 页面标题 */
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

/* 输入框全体设置（单个输入框设置: 写在对应该代码行中了） */
.main_input {
    margin: 0 auto;
    display: flex;
    flex-direction: column; /* 垂直方向布局 */
    align-items: center; /* 子元素水平居中 */
    gap: 10px;
    margin-top: 1vh;
}

/* 主要按钮设置（单个按钮设置: 写在对应该代码行中了） */
.main_button {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    margin-top: 6vh;
    justify-items: center;
}

/* 按钮悬浮效果设置 */
.button:hover {
    transform: scale(1.05);
    box-shadow: 0px 3px 5px #94ab6974;
    background-color: rgba(153, 181, 68, 0.767);
}
</style>
