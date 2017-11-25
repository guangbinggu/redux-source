'use strict'
const Redux=require('redux');
const applyMiddleware=Redux.applyMiddleware;
// const logger=function(store){

//     return function(nextDispatch){
//     	return function(action){
//            console.log('start',action.type);
//            let result=nextDispatch(action);
//            console.log('end',action.type)
//            return result;

//     	}
//     }
 
// }        

const logger=store=>nextDispatch=>action=>{

   console.log('start',action.type);
   let result=nextDispatch(action);
   console.log('end',action.type)
   return result;

}


const createStore=applyMiddleware(logger)(Redux.createStore);

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
store.dispatch({type:'changeName',name:'zengliang'});
