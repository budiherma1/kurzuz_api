// import { Sequelize } from 'sequelize'
import Controller from './Controller.js'
// import DB from '../utility/DB.js'
import DB from '../../utility/DB.js'

class UserController extends Controller {
	index(req, res) {
		res.send('Hello World!')
	}

	async getData(req, res) {
		// console.log(this.getDb())
		let a = await DB.select().from('rooms');
		console.log(a)

		res.send(a)
	}
	test() {
		return 4434343434;
	}
}

export default new UserController