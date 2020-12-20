import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import NumberInput from './packages/number-input'

Vue.config.productionTip = false

Vue.use(NumberInput)

new Vue({
  render: h => h(App),
}).$mount('#app')
