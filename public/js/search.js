// var clearSearch = function(){
// 	var foodResults = $('div#searchResults');
// 	console.log("HELLLOO", foodResults.html());

// };
// clearSearch();

window.onbeforeunload = confirmExit;
function confirmExit()
{
var foodResults = $('div#searchResults');
foodResults.html("<h4> </h4>");
localStorage.clear();




}