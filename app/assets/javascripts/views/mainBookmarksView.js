femur.views.MainBookmarksView = Backbone.View.extend( {
	el : '#bodyContainer',
	
	template : HandlebarsTemplates['bookmarks/show'],
	
	initialize : function() {
		console.log('id; ' + femur.views.bookmarkId );
		femur.collections.bookmarks.on('reset', this.render, this);
		this.render();
	},
	
	render : function() { 
		var b = _.findWhere( femur.collections.bookmarks.toJSON(), {_id : femur.views.bookmarkId });
		$(this.el).html( this.template( {bookmark :  b}) );
		return this;
	}
	
} );
