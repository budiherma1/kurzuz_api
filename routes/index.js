import aveRoute, { Router } from './../utility/aveRoute.js'

// aveRoute
aveRoute.get('/', 'UserController@getData')
aveRoute.get('/middleware', 'UserController@getData', ['AuthMiddleware', 'AuthMiddleware1'])
aveRoute.get('/about', 'AboutController@getData')

aveRoute.middleware(['AuthMiddleware2', 'AuthMiddleware1', 'AuthMiddleware1'], () => {
	aveRoute.prefix('middleware-prefix', () => {
		aveRoute.get('sample-route', 'UserController@getData')
	})
	aveRoute.get('/aboutmid', 'AboutController@getData')
})
aveRoute.group({ middleware: ['AuthMiddleware', 'AuthMiddleware1'], prefix: 'group-middleware-prefix' }, () => {
	aveRoute.get('/route', 'AboutController@getData')
})

aveRoute.prefix('prefix', function () {
	aveRoute.middleware(['AuthMiddleware2', 'AuthMiddleware1', 'AuthMiddleware1'], function () {
		aveRoute.get('middleware-route', 'UserController@getData')
	})
})

aveRoute.get('1', 'UserController@getData')

// Original express route
Router.get('/11', function (req, res) {
	res.send('Birds home page')
})

Router.get('/22', function (req, res) {
	res.send('About birds')
})

export default Router