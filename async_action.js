'use strict'
const Redux=require('redux');
const applyMiddleware=Redux.applyMiddleware;
     

const logger=store=>nextDispatch=>action=>{

   console.log('start',action.type);
   let result=nextDispatch(action);
   console.log('end',action.type)
   return result;

}

const tunk=store=>nextDispatch=>action=>{

   // console.log('start',action.type);
   // let result=nextDispatch(action);
   // console.log('end',action.type)
   // return result;
   if(typeof action =='function'){
     	action(nextDispatch);

   }else{
   	    nextDispatch(action);
   }

}

const createStore=applyMiddleware(tunk,logger)(Redux.createStore);

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


function tunkAction(name){

  return dispatch=>{

              setTimeout(function(){
                     dispatch({
                     	type:'changeName',
                        name})
              },3000)


  }


}
store.subscribe(()=>console.log(store.getState()))
// store.dispatch({type:'changeName',name:'zengliang'});
store.dispatch(tunkAction('zengliang'));
