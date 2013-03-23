femur.views.MidNavView = Backbone.View.extend( {
	el : '#midNavContainer',
	
	listTemplate : HandlebarsTemplates['home/midNav'],
	
	meTemplate : HandlebarsTemplates['home/me'],
	
	initialize : function( data ) {
		if ( data == null ) {
			$(this.el).html( this.meTemplate() );
		}
		else if ( data instanceof PostModelList) {
			this.posts = data;
			this.posts.on('reset', this.renderPosts, this);
			this.renderPosts();
		}
		else if ( data instanceof BookmarkList) {
			this.bookmarks = data;
			this.bookmarks.on('reset', this.renderBookmarks, this);
			this.renderBookmarks();
		}
	},
	
	renderPosts : function() {
		this.render( this.posts );
	},
	
	renderBookmarks : function() {
		this.render( this.bookmarks );
	},
	
	render : function( collection ) { 
		$(this.el).html( this.listTemplate( { collection: collection.toJSON() } ) );
		return this;
	}
	
} );
