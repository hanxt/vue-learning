import someFunc,{flag} from './module-a.js'

if(flag){
  someFunc();
}
// import * as moduleA from './module-a.js';

// if(moduleA.flag){
//   moduleA.doPrintA();
//   let james = new moduleA.Player("james",35)
//   james.beBetter();
// }


// import { flag, doPrintA,Player } from './module-a.js';

// if(flag){
//   doPrintA();
//   let james = new Player("james",35)
//   james.beBetter();
// }


//let {flag,doPrintA} = require('module-a')