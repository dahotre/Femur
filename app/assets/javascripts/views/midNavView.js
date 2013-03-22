femur.views.MidNavView = Backbone.View.extend( {
	el : '#midNavContainer',
	
	listTemplate : HandlebarsTemplates['home/midNav'],
	
	meTemplate : HandlebarsTemplates['home/me'],
	
	initialize : function( data ) {
		if ( data == null ) {
			$(this.el).html( this.meTemplate() );
		}
		else if ( data instanceof PostModelList) {
			this.collection = data;
			this.collection.on('reset', this.render, this);
			this.render();
		}
	},
	
	render : function() { 
		$(this.el).html( this.listTemplate( { posts: this.collection.toJSON() } ) );
		return this;
	}
	
} );
