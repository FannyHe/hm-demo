import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局样式
import './stlye/index.less'
import './stlye/iconfont.css'

// 引入lib-flexible 自动适配所有屏幕
import 'lib-flexible'

import { Field } from 'vant'

Vue.use(Field)

// 注册全局组件
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmButtom from './components/HmButtom.vue'

Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-buttom', HmButtom)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
