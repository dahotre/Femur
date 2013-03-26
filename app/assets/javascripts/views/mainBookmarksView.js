femur.views.MainBookmarksView = Backbone.View.extend( {
	el : '#bodyContainer',
	
	template : HandlebarsTemplates['bookmarks/show'],
	
	events : {
		'submit #bookmarkForm' : 'addBookmark',
		'click #inputUrl' : 'displayForm'
	},
	
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
	},
	
	addBookmark : function(e) {
		e.preventDefault();
		console.log('submit form');
        
        femur.collections.bookmarks.create(	{
        	url: this.$('#inputUrl').val(),
        	title: this.$('#inputTitle').val(),
        	notes: this.$('#inputNotes').val(),
        	tags: this.$('#inputTags').val()
		} );
 
        Backbone.history.navigate('#bookmarks', true);
	},
	
	displayForm : function() {
		$('.fieldsToShow').show('slow');
	}
	
} );
