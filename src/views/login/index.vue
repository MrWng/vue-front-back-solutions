<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="ruleFormRef"
      :model="loginForm"
      :rules="loginFormRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <svg-icon class="svg-container" icon="user"></svg-icon>
        <el-input v-model="loginForm.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <svg-icon class="svg-container" icon="password"></svg-icon>
        <el-input
          v-model="loginForm.password"
          placeholder="密码"
          :type="pwdInputType"
        />
        <svg-icon
          class="svg-container show-pwd"
          @click="showPwdHandler"
          :icon="pwdIconType"
        ></svg-icon>
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="login(ruleFormRef)"
        :loading="loading"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { validatePassword } from './rules'
import router from '@/router'
const loading = ref(false)
const ruleFormRef = ref('ruleFormRef')
const loginForm = ref({
  username: '',
  password: ''
})
const loginFormRules = ref({
  username: {
    required: true,
    message: '用户名必填'
  },
  password: {
    required: true,
    validator: validatePassword()
  }
})
const store = useStore()
/**
 * 密码框显示隐藏
 */
const isShowPwd = ref(false)
const pwdInputType = computed(() => (isShowPwd.value ? 'text' : 'password'))
const pwdIconType = computed(() => (isShowPwd.value ? 'eye-open' : 'eye'))
const showPwdHandler = () => {
  isShowPwd.value = !isShowPwd.value
}

/**
 * 登录
 */
const login = (ruleFormRef) => {
  ruleFormRef.validate(async (valid) => {
    if (valid) {
      // TODO: 登录
      try {
        loading.value = true
        await store.dispatch('user/login', loginForm.value)
        router.push('/')
      } catch (error) {
      } finally {
        loading.value = false
      }
    }
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
