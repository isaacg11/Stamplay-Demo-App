Stamplay.init('demo-app');

//SIGNUP NEW USER ACCOUNT
function signup(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	userInfo = {
		displayName: name,
		email: email,
		password: password
	};

	Stamplay.User.signup(userInfo).then(function(){
		alert('Successful!');
	});
}


//CREATE OBJECT DATA
function create(){
	var message = document.getElementById('message').value;

	objectInfo = {
		description: message
	};

	Stamplay.Object('post').save(objectInfo).then(function(){
		document.getElementById('message').value = "";
		alert('Successful!');
	});
}

