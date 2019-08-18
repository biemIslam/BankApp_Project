//head function
// add window.onload to use eventlistener in an external file
window.onload = function (){
   
    document.querySelector('#menu-bar').innerHTML = '<div id="bank-app"><a href="index.html">Bank App</a></div>' + 
    '<nav><ul><li> <a href="index.html">Home</a></li>' +
    '<li> <a href="#">About</a></li>'+
    '<li> <a href="#">Our team</a></li>'+
    '<li> <button class="btn-signin" id="btnLogin">  Sign in </button> </li>'+
    '<li> <a href="account-create.html">Create Bank account</a></li>'+
    '</ul> </nav>';

    // if (condition) {
        
    // }
    document.querySelector('#btnLogin').addEventListener('click',signinBtn);

    // modal login for signup page
    let signup = document.querySelectorAll('.btn-signin');
    for (let i = 0; i < signup.length; i++) {
        if(signup[i]){
            signup[i].addEventListener('click',function (event) {
                signinBtn();
                event.preventDefault();
            });
        }   
    }
    
}   


    function signinBtn(){
        // alert('ghjk');

        document.querySelector('#modal-div').innerHTML = '<div id="modal-content">'+
        '<span id="close"> &times;</span><form id="myForm"><div class="input-groups"><label>Email:</label>'+
        '<div class="input-fields"> <input type="text" name="" id="" placeholder="you@domain.com" class="text-field">'+
        '</div></div><div class="input-groups"><label>Password:</label>'+
        '<div class="input-fields"> <input type="text" name="" id="" placeholder="enter password.." class="text-field">'+
        '</div></div><div class="input-groups"><label>login as:</label><div class="input-fields" id="radio"> '+
        '<input type="radio" name="person" class="person" value="admin" checked>Admin'+
        '<input type="radio" name="person" class="person" value="staff">Staff'+
        '<input type="radio" name="person" class="person" value="client">Client</div></div>'+
        '<button class="btn-submit" id="btnSub"> <a href="#"> Submit</a></button>'+
        '<span> No account yet?click<a href="signup.html"> Sign up</a></span>'+
        '<div id="forgot-password"> <a href="#"> Forgot password? </a> </div>'+
        '</form></div>'; 

        document.querySelector('#close').addEventListener('click', closeModal);
        function closeModal(){
            document.querySelector('#modal-div').style.display = 'none';;
        }

        // let form = document.querySelector('#myForm');
        let radio = document.querySelectorAll('.person');
        let submit = document.querySelector('#btnSub');
        
        submit.addEventListener('click',function(event){
        
            for(var i = 0; i < radio.length; i++){
                if(radio[i].checked){
                    if(radio[i].value == 'admin'){
                        // alert('admin');
                        window.location = "admin-page.html";
                    }
                    else if(radio[i].value == 'staff'){
                        // alert('staff');
                        window.location = "staff-page.html";
                    }
                    else if(radio[i].value == 'client'){
                        // alert('client');
                        window.location = "account-profile.html";
                    }
                }
            }
        
            event.preventDefault();
        });
          
    }
// signinmodal function 


// user tasks function
function accountList(){
    document.querySelector('#table').style.display = "block";
    document.querySelector('#displayThis').style.display = 'none';
    document.querySelector('#bank-record').style.display = 'none';
    return false;
}
function transaction(){
    document.querySelector('#table').style.display = "none";
    document.querySelector('#displayThis').style.display = 'none';
    document.querySelector('#bank-record').style.display = 'block';
    return false;
}
// user task function



    
    
