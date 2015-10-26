// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){


$('.row').on('submit', '.foodPost', function(e) {
      e.preventDefault();

      var commentData = $(this).serialize();
      var url = "/api/index/" + "/comments";
      $.post(url, commentData, function(data) {
      	console.log('the response is', data);	
        // make HTML string to append to page
        var newComment = "<li>" + data.body + "</li>";
// append the HTML string to the element with an id of 'comment-list' in the DOM
        $('#' + data.recipe_id).append(newComment);
      });
    });
	


	  $("#foodPost").validate({
	  name: {
		 required  : true,
		 minlength : 2 
		},
			message : {
				name:"its to small"
		}
		


});
  		$("#foodPost").validate({
  		comments: {
  			required: true,
  			minlength :10
  		},
  		message : {
				name:"its to small"

  }











	//var FOOD_API_KEY = process.env.FOOD_API_KEY;
	//var url = 'http://food2fork.com/api/search?key=' + FOOD_API_KEY;
	// $('#myForm').on('submit', function(e){
	// 	e.preventDefault();
	// 	console.log('clickeeeed');
	// 	console.log('the serialize :', $('#myForm').serialize());
	// 	$.post('/index', $('#myForm').serialize(), function (response) {
	// 	console.log(' the response is ', response);
	// 	for (var i=0; i<response.recipes.length; i++){
	// 		$response.recipes.append(li class="food" id='storage')
	// 	}

	// 	});
	});
	
    
});