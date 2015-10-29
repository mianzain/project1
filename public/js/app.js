// CLIENT-SIDE JAVASCRIPT
// On page load

$(document).ready(function(){
	var userInput;
	console.log("user input", localStorage.getItem("userInput"));

	$('.row').on('submit', '.foodPost', function(e) {
		e.preventDefault();
	
		var comment = $(this).serialize();
		var foodId = $(this).data('id');
		console.log("food Id: " + foodId);


		$.post('/api/foods/' + foodId + '/comments', comment)
			.success(function (data) {
				var name = data.comments[data.comments.length - 1].name;
				var comment = data.comments[data.comments.length - 1].comments;
				var html = "<li><span class='foodName'>" + name + "</span><br><span class='foodComment'>" + comment + "</span><li>";
				$("#"+data._id).append(html);
			})
			.error(function (data) {
				console.log(data);
			});
	});

// $('#buttonSearch').click(function(){
// 	userInput = $('#storage').val();
// 	localStorage.setItem('userInput', userInput);
// });


	// var foodResults = $('div#searchResults');


// 	$("#foodPost").validate({
// 		name: {
// 			required  : true,
// 			minlength : 22
// 		},
	
// 		comments: {

// 			//required: true,
// 			minlength : 10
// 		}	
	
// // 			message : {
// // 			name:"its to small"
// // },

// 	});

});

