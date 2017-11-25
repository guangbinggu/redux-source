'use strict'
const redux=require('redux');
const promise=require('redux-promise');

const reducer=function(state,action){


	if(typeof state==undefined)return{};

	switch (action.type){
		case 'changeName':
		  return {name:action.name}
		default:
	      return state;
	}
}

//const store=redux.createStore(reducer,redux.applyMiddleware(thunk));
const store=redux.createStore(reducer,redux.applyMiddleware(promise));

function actionCreater(name){
	return {
		type:'changeName',
		name
	}
}

let asyncAction=function(name){

     return new Promise((resolve,reject)=>{

             setTimeout(()=>resolve(actionCreater(name)),1000);
     })


}
store.subscribe(()=>console.log(store.getState()));
store.dispatch(asyncAction('ggb'))