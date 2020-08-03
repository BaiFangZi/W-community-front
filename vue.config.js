const path = require('path')

function pathResolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	// 公共路径(必须有的)
	publicPath: '/',
	// 输出文件目录
	outputDir: "public",
	// 静态资源存放的文件夹(相对于ouputDir)
	assetsDir: "static",
	//eslint
	lintOnSave: false,
	// 我用的only，打包后小些
	runtimeCompiler: false,
	productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
	devServer: {
		disableHostCheck:true,
		open: true, // npm run serve后自动打开页面
		host: '0.0.0.0', // 匹配本机IP地址(默认是0.0.0.0)
		port: 8080, // 开发服务器运行端口号
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
				pathRewrite: {
					"^/api": "api"
				}
			},
		}
	},
	chainWebpack: config => {
		config.resolve.alias
			.set("@", pathResolve("src"))
			.set("@assets", pathResolve("src/assets"))
			.set("@components", pathResolve("src/components"))
			.set("@views", pathResolve("src/views"))
			.set("@public", pathResolve("public"))
			.set("@utils", pathResolve("src/utils"))
			.set("@api", pathResolve("src/api"))

	},
	// configureWebpack: {
	// 	resolve: {
	// 		symlinks: true,
	// 	},
	// },
}
