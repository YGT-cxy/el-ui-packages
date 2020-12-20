<template>
  <div id="app">
    <div style="width: 500px; margin: 0 auto;">
      <div>number-input（整型）的输入值： {{ inputValue }}</div>
      <number-input v-model="inputValue" size="small" />
      <div>number-input（带小数点）的输入值： {{ remainValue }}</div>
      <number-input v-model="remainValue" remain="2" size="small" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      inputValue: '',
      remainValue: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
