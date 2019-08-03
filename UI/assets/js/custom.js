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

// user tasks function
// accountList.addEventListener('click', bankList, false);
function myAccounts(){
    document.querySelector('#hideThis').style.display = "block";
    document.querySelector('#displayThis').style.display = 'none'
    return false;
}
function transaction(){
    document.querySelector('#table').style.display = "block";
    document.querySelector('#displayThis').style.display = 'none';
    document.querySelector('#hideThis').style.display = "none";
    return false;
}
// user task function

// staff tasks function
function bankAccounts(){
    document.querySelector('#table').style.display = "block";
    document.querySelector('#displayThis').style.display = 'none';
    document.querySelector('#bank-record').style.display = 'none';
    return false;
}
function accountRecord(){
    document.querySelector('#table').style.display = "none";
    document.querySelector('#displayThis').style.display = 'none';
    document.querySelector('#bank-record').style.display = 'block';
    return false;
}


document.querySelectorAll('.record').addEventListener('click',recordLink);
function recordLink(){
    // let queryDiv = document.getElementById('recordLink').querySelectorAll('p');
    alert('fghj');
    // for(let i = 0; i < queryDiv.length; i++){
    //     if(queryDiv[i].addEventListener('click',loopRecord)){

    //     }
    // }

    // function loopRecord(){
    //     document.querySelector('#record-table').style.display = "block";
    //     document.querySelector('#displayThis').style.display = 'none';
    //     document.querySelector('#row2').style.display = 'none';
    //     document.querySelector('#bank-record').style.display = 'flex';
    // }
   
    // return false;
}
// recordLink();

    
    
