var modelUser = require('../model/user');
var modelZan = require('../model/zan');
var modelComment = require("../model/comment");
var path = require("path");

//主界面
module.exports.index= function(req,res,next) {
	res.render('index.htm',{title: '欢迎页'});
	
};

//海盗之侠
module.exports.haidaozhixia = function(req,res,next) {
	modelZan.findOne({},function(err,docs) {
		if(err) {
			console.log(err);
		}
		if(docs) {
			res.render("haidaozhixia.htm",{title: "海盗之侠",zan: docs.zanAmount});
		} else {
			res.render("haidaozhixia.htm",{title: "海盗之侠",zan: 0});
		}
	});
	
};

//登录
module.exports.login = {
	get: function(req,res,next){
		res.render("login.htm",{title:"登录"});
	},
	post: function (req,res,next){
		modelUser.findOne({name: req.body.name},function (err,docs){
			if(err){
				console.log(err);
			}
			if(docs){
				if(docs.password == req.body.password){
					req.session.user = docs;
					res.redirect("/haidaozhixia");
				} else{
					res.send("密码错误");
				}
			} else{
				res.send("此用户不存在,请先注册！");
			}
		});
	}
};

//注册
module.exports.reg = {
	get: function(req,res,next){
		res.render("reg.htm",{title:"注册"});
	},
	post: function (req,res,next){
		var postData = {
			name: req.body.name,
			password: req.body.password,
			birth: req.body.birth,
			constellation: req.body.constellation,
			tel: req.body.tel,
			hometown: req.body.hometown,
			place: req.body.place,
			profession: req.body.profession,
			sign: 0
		};
		modelUser.findOne({name: req.body.name},function(err,docs) {
			if(err) {
				console.log(err);
			}
			if(docs) {
				res.send("0");

			} else {
				modelUser.create(postData,function(err,docs) {
					if(err) {
						console.log(err);
					}
					if(docs) {
						req.session.user = docs;
						res.send("1");
					}
				});
				modelZan.findOne({},function(err,docs) {
					if(err) {
						console.log(err);
					}
					if(docs) {
						modelZan.update({zanAmount: docs.zanAmount},{zanAmount: docs.zanAmount+1},function(err,result) {});
					} else {
						modelZan.create({zanAmount: 1},function(err,docs) {});
					}
				});
			}
		});
	}
};
module.exports.resume = function(req,res,next) {
	res.sendFile(path.resolve("views/个人简历.pdf"));
};
module.exports.map = function(req,res,next) {
	res.sendFile(path.resolve("views/map.htm"));
};
module.exports.comment = {
	get: function(req,res,next) {
		res.sendFile(path.resolve("views/comment.htm"));
	},
	post: function(req,res,next) {
		modelComment.create({comment: req.body.comment},function(err,docs) {
			if(err) {
				console.log(err);
			}
			if(docs) {
				console.log(docs);
				res.send("感谢您的意见");
			}
		});
	}
};

//home页面
/*module.exports.home = function(req,res,next){
	res.render('home.htm',{title: "个人博客"});
};*/




//海盗之侠
/*module.exports.haidaozhixia = function(req,res,next) {
	modelZan.find({},function(err,data) {
		if(err) {
			console.log(err);
		}
		if(data) {
			if(req.query.number) {
				modelZan.update({zanAmount: data[0].zanAmount},{zanAmount: parseInt(req.query.number)},function(err){});
				ModelUser.findOne({_id: req.session.user._id},function(err,data) {
					if(err) {
						console.log(err);
					}else {
						ModelUser.update({sign: data.sign},{sign: parseInt(req.query.sign)},function(err){});
						req.session.user.sign = parseInt(req.query.sign);
						res.redirect("/haidaozhixia/" + req.session.user._id);
					}
				});	
			}else {
				res.render("haidaozhixia.htm",{title:"海盗之侠",zan: data[0].zanAmount});
			}
			
		}
	});
};*/



/*module.exports.haidaozhixia = function(req,res,next){
	modelZan.find({},function(err,data) {
		if(err) {
			console.log(err);
		}
		if(data) {
			//console.log('nihao'+data);
			//console.log('nihao'+'你好'+data[0].zanAmount);
			res.render('haidaozhixia.htm',{title:'海盗之侠的个人中心',zan: data[0].zanAmount});
			//data[0].zanAmount += 1;
			if(req.query.number) {
				modelZan.update({zanAmount: data[0].zanAmount},{zanAmount: parseInt(req.query.number)},function(err){});

			}
			
		}
	});

};*/


//个人空间
module.exports.haidaozhixiagerenkongjian = function(req,res,next) {
	res.sendFile(path.resolve("views/gerenkongjian.htm"));
};
//文章列表
module.exports.haidaozhixiawenzhangliebiao = function(req,res,next) {
	res.sendFile(path.resolve("views/wenzhangliebiao.htm"));
};

//前端学习
module.exports.qianduanxuexi = function(req,res,next) {
	res.render("qianduanxuexi.htm");
};
module.exports.chapter = function(req,res,next) {
	res.sendFile(path.resolve("views/chapters/chapter"+req.param('_id')+".htm"));
};

//对党知识学习
module.exports.androidxuexi = function(req,res,next) {
	res.render("androidxuexi.htm");
};



//用户个人信息
/*module.exports.usergerenxinxi = function(req,res,next) {
	ModelUser.findOne({_id: req.session.user._id},function(err,data) {
		if(err) {
			console.log(err);
		}else {
			res.render("usergerenxinxi.htm",{title: "用户个人信息"});
		}
	});
	//res.render("gerenxinxi.htm",{title: "个人信息"});
};*/


//用户信息更新
/*module.exports.userupdate = function(req,res,next) {
	var dataNow = {
		name: req.body.name,
		birth: req.body.birth,
		constellation: req.body.constellation,
		tel: req.body.tel,
		profession: req.body.profession,
		hometown: req.body.hometown,
		place: req.body.place
	};
	req.session.user.name = dataNow.name;
	req.session.user.birth = dataNow.birth;
	req.session.user.constellation = dataNow.constellation;
	req.session.user.tel = dataNow.tel;
	req.session.user.profession = dataNow.profession;
	req.session.user.hometown = dataNow.hometown;
	req.session.user.place = dataNow.place;
	ModelUser.findOne({_id: req.session.user._id},function(err,data) {
		var dataPrevious = {
			name: data.name,
			birth: data.birth,
			constellation: data.constellation,
			tel: data.tel,
			profession: data.profession,
			hometown: data.hometown,
			place: data.place
		};
		ModelUser.update(dataPrevious,dataNow,function(err) {
			if(err) {
				console.log(err)
			}else {
				res.redirect("/user/gerenxinxi/"+req.session.user._id);
			}
		});
	});

	
};*/


/*//用户修改密码
module.exports.userxiugaimima = {
	get: function(req,res,next) {
		res.render("userxiugaimima.htm",{title: "修改密码"});
	},
	post: function(req,res,next) {
		var newPassword = req.query.newPassword;
		ModelUser.update({password: req.session.user.password},{password: newPassword},function(err) {
			console.log(err);
		});
		req.session.user.password = newPassword;
		res.redirect("/user/xiugaimima/" + req.session.user._id);
	}
};*/

//用户帮助
/*module.exports.userbangzhu = function(req,res,next) {
	res.render("userbangzhu.htm",{title: "帮助中心"});
};*/

//退出
/*module.exports.logout = function (req,res,next){
	delete req.session.user;
	res.redirect("/home");
};*/




/*//帮助文档
module.exports.bangzhu = function(req,res,next) {
	res.render("bangzhu.htm",{title: "帮助"});
};*/







//显示个人信息
/*module.exports.userInformation = function (req,res,next){
	var getData = {
		_id: req.param('_id')
	};
	ModelUser.findById(getData,function (err,data){
		if(err){
			console.log(err);
		}
		if(data){
			res.send('此功能待开发！');
		} else{
			res.send('查询不到此用户的信息');
		}
	});

	res.render("gerenkongjian.htm",{title: "个人空间"});
};
*/
/*//登录后才可以做
module.exports.loginYes = function (req,res,next){
	var user = req.session.user;
	if(!user){
		res.redirect("/login");
	} else{
		next();
	}
};
*/
