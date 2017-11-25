

function createStore(){

	let myname='leo';
	function dispatch(){

		console.log(myname);
	}

	return {
		dispath:dispatch;
	}
}

let store=createStore();


store.dispatch();

var dispatch=store.dispatch();
dispatch();