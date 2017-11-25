var redux=require('redux');



var reducer=function(action,state){


	if(action.type=='changeName'){

		return Object.assign({},state,{name:action.name})
	}else{
		return state;
	}
}
var store=redux.createStore(reducer,{name:'wds'})
store.subscribe(()=>console.log(store.getState()));

var action={
	type:'changeName',
	name:'ggb'
}

store.dispatch(action);