<template>
  <div class="font-size-16 font-weight-600 mb24 tc">欢迎注册</div>
  <a-form :model="modelRef" :rules="rulesRef" :label-col="{span: 4}" :wrapper-col="{span: 20}" class="content-box">
    <a-form-item label="用户名" name="name">
      <a-input v-model:value="modelRef.name" placeholder="请输入名称"/>
    </a-form-item>
    <a-form-item label="密码" name="password">
      <a-input v-model:value="modelRef.password" placeholder="请输入密码"/>
    </a-form-item>
    <a-form-item label=" " :colon="false">
      <a-button class="mr16" type="primary">提交</a-button>
      <a-button>注册</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
  import {reactive} from 'vue'

  export default {
    setup () {
      const modelRef = reactive({
        name: '',
        password: ''
      })

      const rulesRef = reactive({
        name: { required: true, message: '请输入用户名称' },
        password: { required: true, message: '请输入密码' }
      })

      return {
        modelRef,
        rulesRef
      }
    },
    data () {
      return {}
    }
  }
</script>

<style lang="stylus">
</style>
