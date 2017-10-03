function store(){
	 
  
    var inputUsername= document.getElementById("username").value;
    var inputEmail= document.getElementById("email").value;
	var inputPassword= document.getElementById("password").value;
	var inputCpassword= document.getElementById("Cpassword").value;
	if(inputPassword != inputCpassword){
		alert("Passwords dont match")
	}
	else{
		var user_info = inputEmail.concat("-");
		user_info = user_info.concat(inputPassword);
		if (localStorage.getItem(inputUsername) == null) {
			localStorage.setItem(inputUsername, user_info);
			window.location.href = "planetas_login.html";
			alert("Welcome to MasterSystem, you can now log in");
		}
		else{
			alert("This username already exists");
			
		}
	}
}
function login(){
	var inputUsername= document.getElementById("username").value;
	var inputPassword= document.getElementById("password").value;
	var user_info = localStorage.getItem(inputUsername)
	if (user_info == null) {
		alert("This username doesn't exist!");
	}
	else{
		if(user_info.split("-")[1] == inputPassword){
			sessionStorage.setItem('player',inputUsername)
			window.location.href = "planetas_game.html";
			
		}
		else{
			alert("Wrong Username/Password!");
		}
		
		
	}
}

   