'use strict'
const Redux=require('redux');
const applyMiddleware=Redux.applyMiddleware;
     

const logger=store=>nextDispatch=>action=>{

   console.log('start',action.type);
   let result=nextDispatch(action);
   console.log('end',action.type)
   return result;

}



const generator=store=>nextDispatch=>action=>{

  if(typeof action=='function' && action.constructor.name=='GeneratorFunction'){
       

       let g=action();
       let v=g.next();
       function run(v){
        console.log(v)
         if(v.done){
             nextDispatch(v.value)
         }else{
             if(v.value && v.value instanceof Promise){

                 v.value.then(function(name){

                    run(g.next(name))  

                 })
             }else{
               nextDispatch(v.value)
             }

         }
       }

       run(v)
  }

}


function *generatorAction(){


    let name=yield new Promise(function(resolve,reject){

           setTimeout(function(param){

            resolve("ggb")
           },1000)


    });
    
    return {
      name,
      type:'changeName'
    }


}



const createStore=applyMiddleware(generator,logger)(Redux.createStore);

const reducer=function(state,action){


	if(typeof state==undefined)return{name:''};

	switch (action.type){
		case 'changeName':
		  return {name:action.name}
		default:
	      return state;

	}
}




let store=createStore(reducer,{name:'leo'});


store.subscribe(()=>console.log(store.getState()))
store.dispatch(generatorAction);
