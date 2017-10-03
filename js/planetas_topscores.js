function get_score_time_dict_all_players(){
	dicionario = {}
	for (var i = 0; i < localStorage.length; i++){
		player_score_time_dict = {}
		user_info = localStorage.getItem(localStorage.key(i));
		scores = user_info.split("-").splice(2);
		for (j in scores){
			score = scores[j].split("t")[0]
			time = scores[j].split("t")[1]
			player_score_time_dict[score] = time;
			
		}
		best_score = Object.keys(player_score_time_dict).sort(function (a, b) {  return a - b;  }).reverse()[0];
		dicionario[best_score] = [localStorage.key(i) , player_score_time_dict[best_score]];
	}

	return dicionario;
}
function set_top_scores(){
	player_scores = get_score_time_dict_all_players();
	scores =Object.keys(player_scores).sort(function (a, b) {  return a - b;  }).reverse();
	
	for (var i = 0; i < scores.length; i++){
		if (document.getElementById("username_"+i) != null){
			document.getElementById("username_"+i).textContent = player_scores[scores[i]][0];
			document.getElementById("score_"+i).textContent = scores[i];
			document.getElementById("time_"+i).textContent = player_scores[scores[i]][1];
		}
	}
}
function set_data(){
	set_top_scores();
	is_logged_in();
}

window.onload = set_data;