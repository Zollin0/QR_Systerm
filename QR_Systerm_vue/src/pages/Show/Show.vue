<template>
    <div class="main">
        <div class="body">
            <vs-col class="top_button">
                <vs-button class="button" style="width: 5vw; height: 5vh; position: absolute; left: 3vw; top: 5vh; letter-spacing: 0.4vw; font-size: 1vw; background-color: rgba(204, 185, 55, 0.85)" @click="goBack">返回</vs-button>
                <p>这是二维码预览展示页（提示用，写代码后记得把这行p删掉）</p>
            </vs-col>
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
        async queryUserInfo(userId) {
            const userInfo = await user.getUserInfo({ userId });
            this.userInfo = userInfo[0]; //这是一个可以照抄的函数逻辑示例（无实际意义，写完别的可以把这个删掉）
        }, //这个干什么用的我也不太明白，我不常用，可以问问gpt
        goBack() {
            this.$router.go(-1); //这是一个可以照抄的函数逻辑示例（用作返回上一页，不能删掉！！！）
        } //需要点击跳转就用这个（复制粘贴后，按需求修改）
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
    width: 97vw;
    height: 95vh;
    justify-content: center;
    background-color: rgba(236, 244, 225, 0.86); /* rgba(236, 244, 225, 0.86);**/
    border-radius: 25px;
}

/* 返回按钮设置 */
.top_button {
    display: flex;
    align-items: center;
}

/* 按钮悬浮效果设置 */
.button:hover {
    transform: scale(1.05);
    box-shadow: 0px 3px 5px #94ab6974;
    background-color: rgba(153, 181, 68, 0.767);
}
</style>
