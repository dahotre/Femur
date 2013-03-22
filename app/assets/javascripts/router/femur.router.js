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
		console.log('showing id : ' + id);
		this.indexPost();
		new femur.views.MainView( id, femur.collections.posts );
	},
	
	showMe : function() {
		console.log('showing me');
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