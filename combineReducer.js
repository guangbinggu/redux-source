'use strict'
var redux=require('redux');
//var combineReducers=redux.combineReducers;
var createStore=redux.createStore;

function combineReducers(reducers){


 return function reducer(state,action){

      let newState={

      }

      for(let key in reducers){
      	newState[key]=reducers[key](state[key],action)
      }
      return newState;
 }



}
function aReducer(state,action){


	if(typeof state==='undefined')
		return [];
	switch(action.type){
		case 'a':
		   return state.concat([action.data])
		default:
		 return state;
	}
}
function bReducer(state,action){


	if(typeof state==='undefined')
		return [];
	switch(action.type){
		case 'b':
		   return state.concat([action.data])
		default:
		 return state;
	}
}
function cNameReducer(state,action){


	if(typeof state==='undefined')
		return '';
	switch(action.type){
		case 'c':
		   return action.name
		default:
		 return state;
	}
}
function cGroupReducer(state,action){


	if(typeof state==='undefined')
		return [];
	switch(action.type){
		case 'c':
		   return state.concat(action.item)
		default:
		 return state;
	}
}
function cReducer(state,action){


	if(typeof state==='undefined')
		return {name:'',group:[]}
	switch(action.type){
		case 'c':
		   return combineReducers({name:cNameReducer,group:cGroupReducer})(state,action)
		default:
		 return state;
	}
}

const reducer=combineReducers({a:aReducer,b:bReducer,c:cReducer});
const store=createStore(reducer,{a:[111],b:[2222],c:{name:'',group:[]}});
store.subscribe(function listener(){

	console.log(store.getState())
})

let action ={
	type:'a',
	data:'ggb'
}
let actionC={
   type:"c",
   name:'lalalal',
   item:'123'

}
store.dispatch(actionC);