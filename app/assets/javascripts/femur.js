femur = {
	models : {},
	views : {},
	collections : {},
	routers : {}
};

$(function() {
	
	femur.routers.router = new femur.Router();
	
	new femur.views.SideNavView();
	
	Backbone.history.start();
	
});