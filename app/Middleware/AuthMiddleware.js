class AuthMiddleware {
	handle (req, res, next) {
		console.log(2222)
		next()
	}
}

export default new AuthMiddleware