import numberInput from './src/number-input'

numberInput.install = function(Vue) {
  Vue.component(numberInput.name, numberInput)
}

export default numberInput
