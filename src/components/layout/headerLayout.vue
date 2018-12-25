<style lang="scss" scoped>
    .headerLayout-container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size:14px;
        position: relative;
    }

    .logo-box{
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 70px;
        border-radius:50%; 
        background: #d7d7d7;
        font-size:12px;
        color: #fff;
        margin-right: 50px;
    }

    .log-out{
        position: absolute;
        right: 200px;
        // top:0;
    }

    .account-settings{
        position: absolute;
        right: 300px;
    }
</style>

<template>
  <div class="headerLayout-container">
    <div class="logo-box">淘buybuy</div>
    <div class="platform-management">平台管理</div>
    <div class="account-settings">账号设置</div>
    <div class="log-out" @click="$router.replace('/login')">退出登录</div>
  </div>
</template>

<script>
export default {
  name: "headerLayout"
};
</script>
