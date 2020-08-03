export default {
	GET_TOKEN(state) {
		return localStorage.getItem('token')
	},
	SET_TOKEN(state, value) {
		localStorage.setItem('token', value)
	}
}
