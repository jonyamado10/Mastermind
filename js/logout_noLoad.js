function is_logged_in(){
	if(sessionStorage.length == 0){
	
	}
	else{
		$('#logout-button').css("visibility", "visible");
		$('#play-login').attr("href", "planetas_game.html");
		$("#logout-button").click(function(){
			sessionStorage.clear();
		});
	}
}