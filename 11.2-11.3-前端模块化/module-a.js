export let flag = true;
export default function (){
   console.log("打印module-a的代码")
}



//export let flag = true;
// export function doPrintA(){
//   console.log("打印module-a的代码")
// }
// export class Player{
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
//   beBetter(){
//     console.log(this.name + "希望成为最好的球员")
//   }
// }


// var flag = true;
// function doPrintA(){
//    console.log("打印module-a的代码")
// }
// class Player{
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
//   beBetter(){
//     console.log(name + "希望成为最好的球员")
//   }
// }
// export {flag, doPrintA,Player}


// module.exports = {
//   flag: flag,
//   doPrintA: doPrintA
// }


// var moduleA = (function(){
//   var obj = {}
//   obj.flag = true;
//   obj.doPrintA = function(){
//     console.log("打印module-a的代码")
//   }
//   return obj
// })()

