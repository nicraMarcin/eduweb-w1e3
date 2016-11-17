(function($){
$(document).ready(function(){
	

	
var nav=$("#nav"),
	hamburger=$(".hamburger");

nav.hide()

hamburger.on("click",function(){

	nav.stop().slideToggle(400);
	
}
);
	
});
})(jQuery);