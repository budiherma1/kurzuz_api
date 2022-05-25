class AboutController {
	index (req, res) {
		res.send('Hello World!')
	}

	getData (req, res) {
		res.send('aboutabc!')
	}
	test () {
		return 4434343434;
	}
}

export default new AboutController