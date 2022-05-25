// class UserController {
// 	async index (resolve) {
// 		return await 5555;
// 	}
// }

// let aa = new UserController;
// console.log(aa.index()+8)
// let a = 7;
// console.log(4+eval(a))

// let UserController = import("./app/Controller/UserController.js").then((aa)=>{
// 	console.log(aa)
// }).catch((e)=>{
// 	console.log(e)
// })
// console.log(UserController)

	// Import the module as a promise
	// and use then() to process the returned value:
	// import('./app/Controller/UserController.js')
	//   .then((aaa) => {
	// 	// Do something with the module
	// 	console.log(aaa.default.test())
	//   })
	//   .catch(err => {
	// 	console.log(err)
	//   })
// let s;
// 	eval('s = 4+8')
// 	console.log(s)

class Controller {
	constructor(){
		this.book = 8;
	}
}

class User extends Controller {
	getUser(){
		return this.book;
	}
}

let a = new User();
console.log(a.getUser())