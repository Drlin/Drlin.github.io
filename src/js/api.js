import request from '../service/request.js'
const URL = 'https://api.github.com/repos/Drlin/Drlin.github.io/issues'

const API = {
	githubIssue() {
		request(URL)
			.then(res => {
				console.log(res)
			})
	}
}

export default API