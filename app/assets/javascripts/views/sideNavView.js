femur.views.SideNavView = Backbone.View.extend( {
	el : '#sideNavContainer',
	
	template : HandlebarsTemplates['home/sideNav'],
	
	events : {
		'click a' : 'navClickAction',
		'click #postsLink' : 'index',
		'click #_meLink' : '_me'
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
	},
	
	index : function() {
		//femur.routers.router.navigate('posts', { trigger: true} );
	},
	
	_me : function() {
		//femur.routers.router.navigate('_me', { trigger: true} );
	}
} );
