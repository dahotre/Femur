PostModel = Backbone.Model.extend( {
	idAttribute: "_id"
} );

PostModelList = Backbone.Collection.extend( {
	url : '/posts'
} );


BookmarkModel = Backbone.Model.extend( {
	idAttribute: "_id"
} );

BookmarkList = Backbone.Collection.extend( {
	url : '/bookmarks'
} );
