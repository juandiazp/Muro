function onSingIn(googleUser){
	var profile = googleUser.getBasicProfile();
	$(".loginS").css("display","none");
	$(".data").css("display","block");
	$("#Fotoperfil").attr('src',profile.getImageUrl());
	$("#email").text(profile.getEmail());
}



function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
	$(".loginS").css("display","block");
	$(".data").css("display","none");
    });
	
  }