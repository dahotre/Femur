femur.views.MainView = Backbone.View.extend( {
	el : '#bodyContainer',
	
	postTemplate : HandlebarsTemplates['posts/show'],
	
	initialize : function() {
		console.log('id; ' + femur.views.postId );
		femur.collections.posts.on('reset', this.render, this);
		this.render();
	},
	
	render : function() {
		var p = null; 
		if (femur.views.postId == null ) {
			p = _.first( femur.collections.posts.toJSON());
		}
		else {
			p = _.findWhere( femur.collections.posts.toJSON(), {_id : femur.views.postId });
		}
		$(this.el).html( this.postTemplate( {post :  p}) );
		return this;
	}
	
} );
