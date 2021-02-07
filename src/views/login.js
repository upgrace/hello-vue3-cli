import {reactive, ref} from 'vue'
import {useForm} from '@ant-design-vue/use'
import account from './login.json'

export const modelRef = reactive({
  name: '',
  password: ''
})

export const rulesRef = reactive({
  name: [{ required: true, message: '请输入用户名称' }],
  password: [{ required: true, message: '请输入密码' }]
})

export const error = ref('')

const {validate, validateInfos, resetFields, clearValidate} = useForm(modelRef, rulesRef)

export const validateNames = validateInfos

export const removeValidate = clearValidate

export const toSubmit = (ctx, e) => {
  e.preventDefault()
  validate().then(() => {
    const keys = Reflect.ownKeys(account)
    const key = modelRef.name.trim()
    const value = modelRef.password.trim()

    if (!keys.includes(key)) {
      error.value = '哎呀，账号不对哦～'
    } else if (value !== account[key]) {
      error.value = '糟糕，密码搞错了～'
    } else {
      ctx.$router.push({
        name: 'Home'
      })

      ctx.$store.dispatch('setAccountName', key)
    }
  })
}

export const toReset = () => {
  error.value = ''
  resetFields()
}
