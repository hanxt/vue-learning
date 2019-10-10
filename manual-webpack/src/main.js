let players = require('./js/player')
require('./css/common.css')
require('./css/lessdemo.less')

console.log(players)

var imgSrc = require('./image/less10kb.jpg');

var img = new Image();
img.src = imgSrc;
document.body.appendChild(img);

let baz = new Set([1, 2, 3])
console.log(baz)


import Vue from 'vue'
import DemoCpn from './vue/DemoCpn.vue'

new Vue({
  render: h => h(DemoCpn)
}).$mount("#app");

// new Vue({
//   el: '#app',
//   template:'<DemoCpn/>',
//   components:{
//     DemoCpn
//   }
// })

