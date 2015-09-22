$(document).ready(function(){

	$("img").click(function(){
		var temp = $(this).attr("data-alt-src");
  		$(this).attr("src", temp);
  		$(this).attr("data-alt-src", temp);
	});
});