function createAction(action,dispatch){


  return function(opt){


  	action=Object.assign({},action,opt,{type:action.type})
  	dispatch(action)
  };



}

var action=createAction({name:'leo',type:'changeName'},store.dispatch)
action({name:'zengliang'})



//redux的写法

functon a(name,id){
	return{
		type:'a',
		name,
		id
	}
}

function b(name){

return {
	type:'b',
	name
}


}

let actions=Redux.bindActionCreaters({a,b},store.dispatch)

actions.a('Leo','id001')