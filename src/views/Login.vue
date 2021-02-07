<template>
  <div class="content-box">
<!--    登陆模块-->
    <div class="font-size-16 font-weight-600 mb24 tc">欢迎登陆</div>
    <a-form ref="login" :label-col="{span: 4}" :wrapper-col="{span: 20}">
      <a-form-item label="用户名" v-bind="validateNames.name">
        <a-input v-model:value="modelRef.name" placeholder="请输入名称" :allowClear="true" @change="changeName"/>
      </a-form-item>
      <a-form-item label="密码" v-bind="validateNames.password">
        <a-input type="password" v-model:value="modelRef.password" placeholder="请输入密码" :allowClear="true" />
      </a-form-item>
      <div class="c-red mt24 mb24 tc" v-if="error">{{error}}</div>
      <a-form-item label=" " :colon="false" class="tc">
        <a-button class="mr16" type="primary" @click="toSubmit">提交</a-button>
        <a-button @click="toReset">重置</a-button>
      </a-form-item>
    </a-form>
<!--    注册按钮-->
    <div class="right-button">
      <a-button @click="toRegister" type="link">注册</a-button>
    </div>
  </div>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  import {modelRef, error, toReset, validateNames, removeValidate, toSubmit} from "@/views/login"

  export default {
    setup () {
      const {ctx} = getCurrentInstance()

      return {
        error,
        modelRef,
        validateNames,
        toSubmit: (e) => toSubmit(ctx, e),
        toReset
      }
    },
    data () {
      return {}
    },
    methods: {
      toRegister () {
        this.$router.push({
          name: 'Register'
        })
      },
      changeName () {
        this.modelRef.password = ''
        this.error = ''

        removeValidate('password')
      }
    }
  }
</script>

<style lang="stylus">
  .content-box {
    position: relative;
    width: 400px;
    margin: 0 auto;
  }

  .right-button {
    position: absolute;
    top: 0px;
    right: 0px;
  }
</style>
