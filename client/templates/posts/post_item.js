Template.postItem.helpers({ 
	profile_image: function() {
		return "https://s3.amazonaws.com/uifaces/faces/twitter/"+this.user+"/128.jpg";
	} 
});

Template.postItem.events({ 
	'click .heart': function() {
		$( "i,span" ).toggleClass( "press", 1000 );
	} 
});

