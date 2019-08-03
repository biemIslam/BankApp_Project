// header function
function myFunction() {
    document.querySelector('#menu-bar').innerHTML = '<div id="bank-app"><a href="index.html">Bank App</a></div>' + 
    '<nav><ul><li> <a href="index.html">Home</a></li>' +
    '<li> <a href="#">About</a></li>'+
    '<li> <a href="#">Our team</a></li>'+
    '<li> <button class="btn-signin" id="btnLogin" onclick="signinBtn()">  Sign in </button> </li>'+
    '<li> <a href="account-create.html">Create Bank account</a></li>'+
    '</ul> </nav>';
}
// header function

// header function for staffpage
function staffFunction() {
    document.querySelector('#nav-bar').innerHTML = '<div id="bank-app"><a href="index.html">Bank App</a></div>' + 
    '<div> <h2 href="index.html">Staff Page</h2></div>'
}
// header function

// signinmodal function for button
function signinBtn(){
    let modal = document.querySelector('#modal-login');
    let close = document.querySelector('#close');

    modal.style.display = "block"
    
    close.addEventListener('click', function(){
        modal.style.display = "none";
    });
}
// signinmodal function for button

// signinmodal function for anchor tag
function signinLink(){
    let modal = document.querySelector('#modal-login');
    let close = document.querySelector('#close');

    modal.style.display = "block";

    close.addEventListener('click', function(){
        modal.style.display = "none";
    });

    return false;
}
// signmodal function

