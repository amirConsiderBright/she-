import Vue from 'vue'
import App from './App.vue'

// import Timeline from 'ant-design-vue/lib/timeline'
// import 'ant-design-vue/lib/timeline/style/css'
//
// import Row from 'ant-design-vue/lib/row'
// import 'ant-design-vue/lib/row/style/css'
//
// import Col from 'ant-design-vue/lib/col'
// import 'ant-design-vue/lib/col/style/css'
//
// import Icon from 'ant-design-vue/lib/icon'
// import 'ant-design-vue/lib/icon/style/css'

import { Timeline, Row, Col, Icon } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Timeline)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
new Vue({
  render: h => h(App),
}).$mount('#app')
