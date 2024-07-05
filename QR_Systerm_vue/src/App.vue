<template>
    <router-view></router-view>
</template>

<script lang="js">
import Login from '@/pages/Home/Home.vue';

export default {
    name: 'App',
    components: {},
    data() {
        return {
            Login: '',
            active: 'Home',
            showNavbar: true
        };
    },
    created() {
        document.addEventListener('backbutton', this.goBack); // 监听移动端设备的后退按钮
    },
    mounted() {},
    updated() {},
    unmounted() {
        document.removeEventListener('backbutton', this.goBack); // 页面销毁时移除监听
    },
    methods: {
        // 用户在移动端设备点击后退按钮时，返回上一条路由
        goBack() {
            this.$router.go(-1);
        },
        goHome() {
            this.$router.push('Home');
        }
    }
};
</script>

<style scoped></style>
