femur.Router = Backbone.Router.extend({
	routes : {
		'' : 'home',
		'_me' : 'showMe',
		'posts/:id' : 'showPost',
		'posts' : 'indexPost',
		'bookmarks/:id' : 'showBookmark',
		'bookmarks' : 'indexBookmark'
	},
	
	initialize : function() {
		// add default routing behavior here
	},
	
	home : function() {
		this.indexPost(); 
	},
	
	showMe : function() {
		new femur.views.MidNavView();
	},
	
	showPost : function( id ) {
		this.indexPost();
		console.log('showing id:' + id);
		femur.views.postId = id;
		new femur.views.MainView( );
	},
	
	indexPost : function() {
		if ( !femur.collections.posts) {
			femur.collections.posts = new PostModelList();
			femur.collections.posts.fetch();	
		}
		new femur.views.MidNavView( femur.collections.posts );
	},
	
	showBookmark : function( id ) {
		this.indexBookmark();
		console.log('showing bm id:' + id);
		femur.views.bookmarkId = id;
		new femur.views.MainBookmarksView();
	},
	
	indexBookmark : function() {
		if ( !femur.collections.bookmarks ) {
			femur.collections.bookmarks = new BookmarkList();
			femur.collections.bookmarks.fetch();	
		}
		new femur.views.MidNavView( femur.collections.bookmarks );
	}
	
});