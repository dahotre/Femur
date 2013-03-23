femur.views.SideNavView = Backbone.View.extend( {
	el : '#sideNavContainer',
	
	template : HandlebarsTemplates['home/sideNav'],
	
	events : {
		'click a' : 'navClickAction'
	},
	
	initialize : function() {
		this.render();
	},
	
	render : function() {
		$(this.el).html( this.template );
		return this;
	},
	
	navClickAction : function( options ) {
		$(options.currentTarget).parent().parent().find('li').removeClass('active');
		$(options.currentTarget).parent().addClass('active');
	}
} );
