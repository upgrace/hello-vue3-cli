import {Form, Input,  Button, Row, Col} from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

export function UseIview (app: any): any {
  app.use(Form).use(Input).use(Button).use(Row).use(Col)
  return app
}
