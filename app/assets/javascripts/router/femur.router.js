femur.routers.router = Backbone.Router.extend({
	routes : {
		'' : 'home'
	},
	
	initialize : function() {
		new femur.views.SideNavView();
		
		Backbone.history.start( {pushState : true});
	},
	
	home : function() {
		console.log('At Home..');
		
		this.collection = new femur.collection.PostModelList();
		this.collection.fetch();
		
		new femur.views.MidNavView( this.collection );
	},
	
	showPost : function( id ) {
		console.log('showing id : ' + id);
	}
	
});