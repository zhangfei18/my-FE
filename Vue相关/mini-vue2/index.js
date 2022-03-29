import Vue from "./src/vue.js";
const vm = new Vue({
  el: '#app',
  data: {
    msg: 'hello mini-vue'
  },
  methods: {
    handler() {
      console.log('111')
    }
  }
})
console.log(vm)