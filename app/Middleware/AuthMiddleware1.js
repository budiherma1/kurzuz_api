class AuthMiddleware1 {
	handle (req, res, next) {
		console.log(88888)
		next()
	}
}

export default new AuthMiddleware1