femur.views.MidNavView = Backbone.View.extend( {
	el : '#midNavContainer',
	
	template : HandlebarsTemplates['midNav'],
	
	initialize : function( posts ) {
		this.collection = posts;
		this.collection.on('reset', this.render, this);
	},
	
	render : function() { 
		$(this.el).html( this.template( {posts : this.collection.models } ) );
		return this;
	}
	
} );
