femur.views.MidNavView = Backbone.View.extend( {
	el : '#midNavContainer',
	
	postsTemplate : HandlebarsTemplates['posts/midNav'],
	
	bookmarksTemplate : HandlebarsTemplates['bookmarks/midNav'],
	
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
		$(this.el).html( this.postsTemplate( { collection: this.posts.toJSON() } ) );
		return this;
	},
	
	renderBookmarks : function() {
		var bookmarkTags = [ ];
		_.each(this.bookmarks.models, function( bookmark ) {
			bookmarkTags.push( bookmark.get('tags'));			
		});
		bookmarkTags = _.uniq(_.flatten( bookmarkTags ));
		$(this.el).html( this.bookmarksTemplate( { collection: bookmarkTags } ) );
		return this;
	}
	
} );
