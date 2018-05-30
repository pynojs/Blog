/*var ModelBlog = require('../model/post');

//发表微博
module.exports.blog = {
	get: function (req,res,next){	
		res.render('blog',{title: '发表'});
	},
	post: function (req,res,next){
		var blogData = {
			author: req.session.user._id,
			title: req.body.title,
			content: req.body.content
		};
		ModelBlog.create(blogData,function (err,data){
			if(err){
				console.log(err);
			} else{
				res.redirect('/blog/'+data._id);
			}
		});
	}
};

//显示微博列表
module.exports.list = function (req,res,next){
	ModelBlog.find({},null,{sort: {_id:-1}}).populate('author').exec(function (err,data){
		if(err){
			console.log(err);
		} else{
			res.render('list',{ 
				title: '微博列表',
				data: data
			});
		}
	});
};

//显示微博内容
module.exports.blogContent = function (req,res,next){
	var _id = {
		_id: req.param('_id')
	}
	ModelBlog.findOne(_id,function (err,data){
		if(err){
			console.log(err);
		} else{
			res.render('appearance',{
				title: data.title,
				content: data.content
			});
		}
		//console.log(data.content);
	});
};
*/
