femur.views.MainBookmarksView = Backbone.View.extend( {
	el : '#bodyContainer',
	
	template : HandlebarsTemplates['bookmarks/show'],
	
	initialize : function() {
		femur.collections.bookmarks.on('reset', this.render, this);
		this.render();
	},
	
	render : function() { 
		//var b = _.find( femur.collections.bookmarks.toJSON(), {_id : femur.views.bookmarkId });
		var collection = null;
		if (femur.views.tag == null) {
			collection = femur.collections.bookmarks.toJSON();
		}
		else {
			console.log('current tag : ' + femur.views.tag);
			collection = [ ];
			_.each( femur.collections.bookmarks.models, function( model ) {
				if (model.get('tags') != null && _.contains(model.get('tags'), femur.views.tag )) {
					collection.push(model.toJSON());
				}
				else {
					console.log('model doesnt contain tag');
				}
			});
		}
		$(this.el).html( this.template( {bookmarks :  collection }) );
		return this;
	}
	
} );
