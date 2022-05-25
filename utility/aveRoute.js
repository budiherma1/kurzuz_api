import express from 'express'
const Route = express.Router()

class aveRoute {

	async get(path, ct, mid) {
		return this.proceed('get', path, ct, mid);
	}

	async post(path, ct, mid) {
		return this.proceed('post', path, ct, mid);
	}

	async put(path, ct, mid) {
		return this.proceed('put', path, ct, mid);
	}

	async delete(path, ct, mid) {
		return this.proceed('delete', path, ct, mid);
	}

	async middleware(mid = [], cb) {
		this.mid = mid;
		cb();
		this.mid = '';
	}

	async prefix(pref, cb) {
		this.pref = ('/' + pref).replace('//', '/');
		cb();
		this.pref = '';
	}

	async group({middleware, prefix}, cb) {
		if (middleware) {
			this.mid = middleware;
		}
		if (prefix) {
			this.pref = ('/' + prefix).replace('//', '/');
		}

		cb();

		if (middleware) {
			this.mid = '';
		}
		if (prefix) {
			this.pref = '';
		}
	}

	async proceed(type, path, ct, mid) {
		let p = ('/' + path).replace('//', '/');
		let ctm = ct.split('@');
		let pref = this.pref ?? '';

		if (this.mid) {
			mid = this.mid;
		}

		let c = (await import(`./../app/Controller/${ctm[0]}.js`)).default
		let midd = [];
		let midn = "";
		if (mid) {
			midn = "[";
			for (let a in mid) {
				midd.push(
					(await import(`./../app/Middleware/${mid[a]}.js`)).default
				)
				midn += ` midd[${a}].handle,`;
			}
			midn += "], ";
		}

		let route = `Router.${type}('${pref}${p}',${mid ? midn : ''}c.${ctm[1]})`;
		
		console.log(route)
		return eval(route)
	}
}

export let Router = Route;
export default new aveRoute;