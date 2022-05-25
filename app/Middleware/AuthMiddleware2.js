class AuthMiddleware2 {
	handle (req, res, next) {
		console.log('AuthMiddleware2')
		next()
	}
}

export default new AuthMiddleware2