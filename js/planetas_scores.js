// function get_user_scores(){
	// var user = sessionStorage.getItem('player')
    // var user_info = localStorage.getItem(user)
	// scores = user_info.split("-").splice(2);


	// return scores.sort(function (a, b) {  return a - b;  })
	
// }
function get_score_time_dict(){
	var user = sessionStorage.getItem('player')
    var user_info = localStorage.getItem(user)
	scores = user_info.split("-").splice(2);
	dicionario = {}
	for (i in scores){
		score = scores[i].split("t")[0]
		time = scores[i].split("t")[1]
		dicionario[score] = time;
		
		
		
	}
	return dicionario;
}

function set_user(){
	document.getElementById("player-name").textContent = sessionStorage.getItem('player'); 

}
function set_scores(){ 
	var scores_times = get_score_time_dict();
	var scores = Object.keys(scores_times).sort(function (a, b) {  return a - b;  }).reverse();
	for (var i = 0; i < scores.length; i++){
		
		if (document.getElementById("score_"+i) != null){
			document.getElementById("score_"+i).textContent = scores[i];
			document.getElementById("time_"+i).textContent = scores_times[scores[i]];
		}
   
	}
}	
function set_data(){
	set_user();
	set_scores();
	is_logged_in();	
	
}
window.onload = set_data;