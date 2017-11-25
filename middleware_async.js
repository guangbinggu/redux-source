'use strict'
const redux=require('redux');
const thunk=require('redux-thunk').default;

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
const store=redux.createStore(reducer,redux.applyMiddleware(thunk.withExtraArgument({default:'javascript'})));



let asyncAction=function(name){

	let action={
	type:'changeName',
	name
    };

	return (dispatch,getState,api)=>{
      console.log(api)
       setTimeout(function(){
         dispatch(action)
       },1000)
	};
}
store.subscribe(()=>console.log(store.getState()));
store.dispatch(asyncAction('ggb'))