'use strict'  
// function * fn(){  
//     console.log('ggb')  
// }  
  
// var a=fn(); //没有任何结果，仅仅返回了一个指针,该指针指向generator接口，也就是generator对象 
// console.log(a.next())

function *fn(_name){  
  
    let name=yield _name;//yield 默认返回undefined  
    return {name,age:123} ;  
}  
  
  
let it = fn('ggb');  
console.log(it.next());  
//console.log(it.next());//所以此处获取的是return 的name值，就是undefined;  
console.log(it.next('ggq'));//打印{ value: 'ggq', done: true }  