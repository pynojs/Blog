var pluginUser = require("../routerHandlers/user");
var pluginBlog = require("../routerHandlers/blog");

module.exports = function(app) {
	/*app.use(function (req,res,next) {
		var user = req.session.user;
		if(user) {
			app.locals.user = user;
		} else {
			app.locals.user = user;
		}
		next();
	});*/


	
	app.get('/',pluginUser.index);
	app.get("/haidaozhixia",pluginUser.haidaozhixia);
	app.get("/login",pluginUser.login.get);
	app.post("/login",pluginUser.login.post);
	app.get("/reg",pluginUser.reg.get);
	app.post("/reg",pluginUser.reg.post);
	app.get("/haidaozhixia/gerenkongjian",pluginUser.haidaozhixiagerenkongjian);
	app.get("/haidaozhixia/wenzhangliebiao",pluginUser.haidaozhixiawenzhangliebiao);
	app.get("/resume",pluginUser.resume);
	app.get("/map",pluginUser.map);
	app.get("/qianduanxuexi",pluginUser.qianduanxuexi);
	app.get("/chapter/:_id",pluginUser.chapter);
	app.get("/androidxuexi",pluginUser.androidxuexi);
	app.get("/comment",pluginUser.comment.get);
	app.post("/comment",pluginUser.comment.post);
	//app.get("/home",pluginUser.home);

	

	
	
	
	
	
	
	//app.get("/user/gerenxinxi/:_id",pluginUser.usergerenxinxi);
	//app.post("/user/update/:_id",pluginUser.userupdate);
	//app.get("/user/xiugaimima/:_id",pluginUser.userxiugaimima.get);
	//app.post("/user/xiugaimima/:_id",pluginUser.userxiugaimima.post);
	//app.get("/user/bangzhu/:_id",pluginUser.userbangzhu);
	//app.get("/logout",pluginUser.logout);

	//app.get("/haidaozhixia",pluginUser.haidaozhixia);
	//app.get("/haidaozhixia/wenzhangliebiao",pluginUser.haidaozhixiawenzhangliebiao);
	
	
	
	//修改个人信息
	
	
	//app.get("/user/bangzhu/:_id",pluginUser.bangzhu);

	//发表微博
	//app.get("/blog",pluginUser.loginYes,pluginBlog.blog.get);
	//app.post("/blog",pluginBlog.blog.post);
	//显示微博列表
	//app.get("/list",pluginBlog.list);
	//显示微博内容
	//app.get("/blog/:_id",pluginBlog.blogContent);
	
};