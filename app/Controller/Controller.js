// import knex from './../../config/database.js'
import DB from './../../utility/DB.js'

class Controller {
	constructor(){
		this.DB = DB
		this.aa = 'ini aa from controller main'
		console.log('execure controller main')
	}

	getDb(){
		return 3333;
	}
}

export default Controller