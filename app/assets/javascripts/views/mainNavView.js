femur.views.MainNavView = Backbone.View.extend( {
	el : '#bodyContainer',
	
	postTemplate : HandlebarsTemplates['posts/show'],
	
	initialize : function( id, posts ) {
		if ( posts instanceof PostModelList && id != null ) {
			
			this.render();
		}
	},
	
	render : function() { 
		$(this.el).html( this.postTemplate() );
		return this;
	}
	
} );
