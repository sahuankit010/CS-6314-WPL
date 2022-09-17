window.onload = function() {

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially hidden

    var spanUsername = document.createElement("span");
	var username = document.getElementById("username");
    spanUsername.style.display = "none"; //hide the span element
    username.parentNode.appendChild(spanUsername);

    var spanPassword = document.createElement("span");
    var password = document.getElementById("password");
    spanPassword.style.display = "none";
    password.parentNode.appendChild(spanPassword);

    var spanEmail = document.createElement("span")
    var email = document.getElementById("email");
    spanEmail.style.display = "none";
    email.parentNode.appendChild(spanEmail);
    
    //Functions here:

    username.onfocus = function(){
        username.classList = []
        username.classList.add("info");
        spanUsername.style.display = "inline";
        spanUsername.innerHTML = "  This is for entering username, please don't upset me!";
    }

    username.onblur = function(){
        if(username.value.length){
            var letters = /^[0-9a-zA-Z]+$/;
            if(username.value.match(letters)){
                username.classList.add("ok");
                spanUsername.style.display = "inline";
                spanUsername.innerHTML = "  OK";
               return true;
            } else{
                username.classList.add("error")
                spanUsername.style.display = "inline";
                spanUsername.innerHTML = "  Error";
                return false;
            } 
        } else{
            spanUsername.style.display = "none";
            username.classList = []
        }
    }
    password.onfocus = function() {
        password.classList = []
        password.classList.add("info");
        spanPassword.style.display = "inline";
        spanPassword.innerHTML = "  Enter Password!";
    }

    password.onblur = function(){
        if(password.value.length){
            if(password.value.length >= 6) {
                password.classList.add("ok")
                spanPassword.style.display = "inline";
                spanPassword.innerHTML = "  OK";
            } else {
                password.classList.add("error")
                spanPassword.style.display = "inline";
                spanPassword.innerHTML = "  Error";
            }
        } else{
            password.classList = []
            spanPassword.style.display = "none";
        }

    }

    email.onfocus = function() {
        email.classList = []
        email.classList.add("info");
        spanEmail.style.display = "inline";
        spanEmail.innerHTML = "  Enter mail, we promise that we won't span your inbox";
    }

    email.onblur = function(){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value.length){
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                spanEmail.style.display = "inline";
                spanEmail.innerHTML = "  OK";
            } else{
                email.classList.add("error")
                spanEmail.style.display = "inline";
                spanEmail.innerHTML = "  Error";
            }
        } else{
            email.classList = []
            spanEmail.style.display = "none";
        }
    }

}


