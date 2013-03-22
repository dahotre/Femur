femur.Router = Backbone.Router.extend({
	routes : {
		'' : 'home',
		'posts/:id' : 'showPost',
		'_me' : 'showMe',
		'posts' : 'indexPost'
	},
	
	initialize : function() {
		// add default routing behavior here
	},
	
	home : function() {
		this.indexPost(); 
	},
	
	showPost : function( id ) {
		this.indexPost();
		console.log('showing id:' + id);
		femur.views.postId = id;
		new femur.views.MainView( );
	},
	
	showMe : function() {
		new femur.views.MidNavView();
	},
	
	indexPost : function() {
		if ( !femur.collections.posts) {
			femur.collections.posts = new PostModelList();
			femur.collections.posts.fetch();	
		}
		new femur.views.MidNavView( femur.collections.posts );
	}
	
});