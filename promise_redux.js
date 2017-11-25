'use strict'
const Redux=require('redux');
const applyMiddleware=Redux.applyMiddleware;
     

const logger=store=>nextDispatch=>action=>{

   console.log('start',action.type);
   let result=nextDispatch(action);
   console.log('end',action.type)
   return result;

}

const promiseAction=store=>nextDispatch=>action=>{

          if(action instanceof Promise){


            action.then(function(param){
                  
                  nextDispatch(param)
            })

          }else{

           nextDispatch(action)


          }

}


const promise=function(name){


   return new Promise((resolve,rejected)=>{

        setTimeout(function(){

          resolve({
            type:'changeName',
            name
          })

        },3000);

   })

}

const createStore=applyMiddleware(promiseAction,logger)(Redux.createStore);

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
store.dispatch(promise('ggb'));
