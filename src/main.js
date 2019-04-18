import Vue from 'vue'
import App from './App.vue'
// import '../src/assets/theme.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

new Vue({
  el: '#app',
  render: h => h(App),
  components:{App}
})
