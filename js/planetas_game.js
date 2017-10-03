var Mercury = 'url("img/MercuryXP.ico")';
var Venus = 'url("img/VenusXP.ico")';
var Earth = 'url("img/EarthXP.ico")';
var Mars = 'url("img/MarsXP.ico")';
var Jupiter = 'url("img/JupiterXP.ico")';
var Saturn = 'url("img/SaturnXP.ico")';
var Uranus = 'url("img/UranusXP.ico")';
var Neptune = 'url("img/NeptuneXP.ico")';
var Pluto = 'url("img/PlutoXP.ico")';
var planetArray = [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto];
var realCode = [];
var inc = 0;
var points = 0;
var watch = new Stopwatch();
var greens = 0;
var whites = 0;



function clear_all() {
    for (var i = 0; i <= 3; i++){
        document.getElementById("hipotese" + i).style.backgroundImage= "";
    }
}

function makeRandomPlanet(){    
    var randomNumber = Math.floor(Math.random()*planetArray.length);
    var planet = planetArray[randomNumber];
    return planet;
}

function makeRandomCode(){
    var planet1 = makeRandomPlanet();
	var planet2 = makeRandomPlanet();
	var planet3 = makeRandomPlanet();
	var planet4 = makeRandomPlanet();
    
    document.getElementById("final0").style.backgroundImage = planet1;
    document.getElementById("final1").style.backgroundImage = planet2;
    document.getElementById("final2").style.backgroundImage = planet3;
    document.getElementById("final3").style.backgroundImage = planet4;   
    
	return [planet1, planet2, planet3, planet4];
}

function game(){ 
	is_logged_in();
    fill();
	realCode = makeRandomCode();
	console.log(realCode);
    document.getElementById("player-name").textContent = sessionStorage.getItem('player');    
}

function fill(){
    for (var i = 0; i < planetArray.length; i++ ){
        document.getElementById("planet" + i).style.backgroundImage = planetArray[i];
    }
    
}

function pick(clicked_id){
    var emptyTry1 = document.getElementById("hipotese0");
    var emptyTry2 = document.getElementById("hipotese1");
    var emptyTry3 = document.getElementById("hipotese2");
    var emptyTry4 = document.getElementById("hipotese3");
    var choice = document.getElementById(clicked_id).style.backgroundImage;
    console.log(clicked_id);
     var tenta1 = document.getElementById("hipotese0").style.backgroundImage;
	var tenta2 = document.getElementById("hipotese1").style.backgroundImage;
	var tenta3 = document.getElementById("hipotese2").style.backgroundImage;
	var tenta4 = document.getElementById("hipotese3").style.backgroundImage;
	
	
		if (emptyTry1.style.backgroundImage == ""){
			emptyTry1.style.backgroundImage = choice;
		} 
		
		else if (emptyTry2.style.backgroundImage == ""){
			if(tenta1==choice){
				alert("repetido");
			}
			else{
			emptyTry2.style.backgroundImage = choice;
			}
		}
		
		else if (emptyTry3.style.backgroundImage == ""){
			if(tenta1==choice ||tenta2 == choice){
				alert("repetido");
			}
			else{
			emptyTry3.style.backgroundImage = choice;
			}
			
		}

		else if (emptyTry4.style.backgroundImage == ""){
			if(tenta1==choice ||tenta2 == choice || tenta3 == choice){
				alert("repetido");
			}
			else{
			emptyTry4.style.backgroundImage = choice;
			}
		}     
	
}

function remove(clicked_id){
    document.getElementById(clicked_id).style.backgroundImage = "";
}

function check() {
    var round = document.getElementsByClassName("colm");
    var tentativa = round[inc].getElementsByClassName("try");
    var resposta = round[inc].getElementsByClassName("resposta");
    var tarray = [];
    var realCodeCopy = realCode.slice(0);
    var Rpoints = 0;
    var tdpoints = document.getElementsByClassName("points");
   
		if (document.getElementById("hipotese0").style.backgroundImage != "" && document.getElementById("hipotese1").style.backgroundImage != "" && document.getElementById("hipotese2").style.backgroundImage != "" && document.getElementById("hipotese3").style.backgroundImage != ""){
			for (var i = 0; i < tentativa.length; i++){
				tentativa[i].style.backgroundImage = document.getElementById("hipotese"+i).style.backgroundImage; 
				tarray.push(tentativa[i].style.backgroundImage);
			}
			clear_all();
			for (var i = 0; i < realCodeCopy.length; i++){
				if (tarray[i] === realCodeCopy[i]){
					if (resposta[0].style.backgroundColor == ""){
						resposta[0].style.backgroundColor = "#10bc4c";
					} 

					else if (resposta[1].style.backgroundColor == ""){
						resposta[1].style.backgroundColor = "#10bc4c";
					}

					else if (resposta[2].style.backgroundColor == ""){
						resposta[2].style.backgroundColor = "#10bc4c";
					}

					else if (resposta[3].style.backgroundColor == ""){
						resposta[3].style.backgroundColor = "#10bc4c";
					}
					greens = greens + 1;
					realCodeCopy[i] = "";
					tarray[i] = "";
					Rpoints = Rpoints + 10;
				} else {
					for (var e = 0; e < tentativa.length; e++){
						if (tarray[i] === realCodeCopy[e] && tarray[e] !== realCodeCopy[e]){
							if (resposta[0].style.backgroundColor == ""){
								resposta[0].style.backgroundColor = "white";
							} 

							else if (resposta[1].style.backgroundColor == ""){
								resposta[1].style.backgroundColor = "white";
							}

							else if (resposta[2].style.backgroundColor == ""){
								resposta[2].style.backgroundColor = "white";
							}

							else if (resposta[3].style.backgroundColor == ""){
								resposta[3].style.backgroundColor = "white";
							}
							whites = whites + 1;
							realCodeCopy[e] = "";
							tarray[i] = "";
							Rpoints = Rpoints + 5;
							break; 
						}                                   
					}                 
				}     
			}
			points = 40*(8-inc) + Rpoints;
			tdpoints[inc].innerText = Rpoints;
			tdpoints[9].innerText = points
			inc = inc+1;
			if (resposta[0].style.backgroundColor == "rgb(16, 188, 76)" && resposta[1].style.backgroundColor == "rgb(16, 188, 76)" && resposta[2].style.backgroundColor == "rgb(16, 188, 76)" && resposta[3].style.backgroundColor == "rgb(16, 188, 76)"){
				fillstats ()
				document.getElementById("board").style.display = "none";
				document.getElementById("check").style.display = "none";
				document.getElementById("planets_list").style.display = "none";            
				document.getElementById("end").style.display = "block";
				document.getElementById("stats").style.display = "block";
				document.getElementById("end").style.backgroundColor = "#10bc4c";
				document.getElementById("end").textContent = "YOU WIN";
				watch.stop();
				document.getElementById("c0").style.backgroundImage = document.getElementById("final0").style.backgroundImage;
				document.getElementById("c1").style.backgroundImage = document.getElementById("final1").style.backgroundImage;
				document.getElementById("c2").style.backgroundImage = document.getElementById("final2").style.backgroundImage;
				document.getElementById("c3").style.backgroundImage = document.getElementById("final3").style.backgroundImage;  
				
				add_score_to_storage()
				
			} 
			else if (inc > 8){
				fillstats ()
				document.getElementById("board").style.display = "none";
				document.getElementById("check").style.display = "none";
				document.getElementById("planets_list").style.display = "none";            
				document.getElementById("end").style.display = "block";
				document.getElementById("stats").style.display = "block";
				document.getElementById("end").style.backgroundColor = "#ef2d2d";
				document.getElementById("end").textContent = "YOU LOSE"; 
				watch.stop();
				document.getElementById("c0").style.backgroundImage = document.getElementById("final0").style.backgroundImage;
				document.getElementById("c1").style.backgroundImage = document.getElementById("final1").style.backgroundImage;
				document.getElementById("c2").style.backgroundImage = document.getElementById("final2").style.backgroundImage;
				document.getElementById("c3").style.backgroundImage = document.getElementById("final3").style.backgroundImage;  
				
				add_score_to_storage()
			}
		}
	
}
function add_score_to_storage(){
	var user = sessionStorage.getItem('player')
    var user_info = localStorage.getItem(user)
	user_info = user_info.concat("-");
	user_info = user_info.concat(points);
	user_info = user_info.concat("t");
	user_info = user_info.concat(document.getElementById("timer").textContent);
	localStorage.setItem(user, user_info);
}

function refresh (){
    greens = 0;
    whites = 0;
    points = 0;
    clear_all();
	realCode = makeRandomCode();
	console.log(realCode);
    watch.stop();
    watch.reset();
    document.getElementById("stats").style.display = "none";
    document.getElementById("stats_button").style.display = "none";
    document.getElementById("check").style.display = "none";
    document.getElementById("end").style.display = "none";
    document.getElementById("planets_list").style.display = "none";
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("board").style.display = "inline-block";
    
    var tentativa = document.getElementsByClassName("try");
    var resposta = document.getElementsByClassName("resposta");
    var key = document.getElementsByClassName("key");
    var tdpoints = document.getElementsByClassName("points");
    tdpoints[9].innerText = 360;
    
    for (var i = 0; i < tentativa.length; i++){
        tentativa[i].style.backgroundImage = "";
    }
    for (var i = 0; i < resposta.length; i++){
        resposta[i].style.backgroundColor = "";
    }
    for (var i = 0; i < key.length; i++){
        key[i].style.backgroundImage = "";
    } 
    for (var i = 0; i < (tdpoints.length-1); i++){
        tdpoints[i].innerText = "-";
    }    
    
    inc = 0;
}

function start (){
    document.getElementById("start").style.display = "none";
    document.getElementById("check").style.display = "inline-block";
    document.getElementById("planets_list").style.display = "inline-block";   
    watch.start();
}

function board (){
    document.getElementById("board").style.display = "inline-block";
    document.getElementById("stats_button").style.display = "inline-block";
    document.getElementById("end").style.display = "none";
    document.getElementById("stats").style.display = "none";      
}
function stats (){
    document.getElementById("board").style.display = "none";
    document.getElementById("stats_button").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("stats").style.display = "block";      
}

function fillstats (){
    var fstats = document.getElementsByClassName("finalstats");
    fstats[0].innerText = inc;
    fstats[1].innerText = document.getElementById("timer").textContent;
    fstats[2].innerText = greens;
    fstats[3].innerText = whites;
    fstats[4].innerText = points;
}


// timer


function Stopwatch() {   
    var time = 0;
    var interval;
    var offset;
    
    
    function update() {
        if (this.isOn) {
          var timePassed = delta();
          time += timePassed;
        }
        var formattedTime = timeFormatter(time);
        document.getElementById("timer").textContent = formattedTime;
        
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();   
        
        if (minutes.length < 2) {
          minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
          seconds = '0' + seconds;
        }
        while (milliseconds.length < 3) {
          milliseconds = '0' + milliseconds;
        }
        return minutes + ':' + seconds + '.' + milliseconds;
    }

    this.isOn = false;

    this.start = function() {
        if (!this.isOn) {
          interval = setInterval(update.bind(this), 1);
          offset = Date.now();
          this.isOn = true;
        }
    };

    this.stop = function() {
        if (this.isOn) {
          clearInterval(interval);
          interval = null;
          this.isOn = false;
        }
    };

    this.reset = function() {
        time = 0;
        update();
    };
}


window.onload = game;


