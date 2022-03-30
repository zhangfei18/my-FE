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

_c('div', { attrs: { "id": "app" } }, [_c('layout', { scopedSlots: _u([{ key: "footer", fn: function ({ childInfo }) { return _c('p', {}, [_v(_s(childInfo))]) } }]) }, [_c('h1', { attrs: { "slot": "header" }, slot: "header" }, [_v("Here might be a page title")]), _v(" "), _c('p', [_v("A paragraph for the main content.")]), _v(" "), _c('p', [_v("And another one.")])])], 1) 