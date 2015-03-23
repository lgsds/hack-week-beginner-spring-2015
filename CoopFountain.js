/*jQuery for clicking and sliding*/
$(document).ready(function(){
	$("#FoodItems h3").click(function(){
		//slide up all the link lists
		$("#FoodItems ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})