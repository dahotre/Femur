femur = {
	models : {},
	views : {},
	collection : {},
	routes : {}
};

femur.Router = Backbone.Router.extend({
	routes : {
		'' : 'home'
	},
	
	home : function() {
		console.log('At Home..');
	}
});

$(function() {
	
	new femur.Router();
	
	Backbone.history.start();
	
	// var posts = [ {url_title : '1_title', title : 'First title', body : 'This is the first title'},
	 // {url_title : '2_title', title : 'Second title', body : 'This is the second title'} ];
});