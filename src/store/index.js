import Vuex from 'vuex'
import Vue from 'vue'
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})

// import state from './state'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'
// import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
	// state,
	// getters,
	// mutations,
	// actions,
	modules,
})

export default store

// import Vue from 'vue'
// import Vuex from 'vuex'
// import getters from './getters'

// Vue.use(Vuex)

// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

// const store = new Vuex.Store({
//   modules,
//   getters
// })

// export default store