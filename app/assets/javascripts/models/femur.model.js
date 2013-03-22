PostModel = Backbone.Model.extend( {
	idAttribute: "_id"
} );

PostModelList = Backbone.Collection.extend( {
	url : '/posts'
} );
