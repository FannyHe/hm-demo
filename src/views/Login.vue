<template>
  <div>
    <hm-header>登录</hm-header>
    <!-- logo -->
    <hm-logo></hm-logo>
    <van-field
      v-model="username"
      error
      required
      label="用户名"
      placeholder="请输入用户名"
    />
    <van-field
      v-model="password"
      required
      label="手机号"
      placeholder="请输入手机号"
      error-message="手机号格式错误"
    />

    <hm-buttom>登录</hm-buttom>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
}
</script>

<style></style>
