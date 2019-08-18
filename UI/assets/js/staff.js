window.onload = function ()
{
    
    if(window.location.href == 'http://127.0.0.1:5500/UI/staff-page.html'){
        document.querySelector('#nav-bar').innerHTML = '<div id="bank-app"><a href="index.html">Bank App</a></div>' + 
        '<div> <h2 href="index.html">Staff Page</h2></div>';
        document.querySelector('#modal-div').style.display = 'none';
    }
    else if (window.location.href == 'http://127.0.0.1:5500/UI/account-profile.html') {
        document.querySelector('#nav-bar').innerHTML = '<div id="bank-app"><a href="index.html">Bank App</a></div>' + 
        '<div> <h2 href="index.html">My Account History</h2></div>';
        document.querySelector('#modal-div').style.display = 'none';
    }
    else if (window.location.href == 'http://127.0.0.1:5500/UI/admin-page.html') {
        document.querySelector('#nav-bar').innerHTML = '<div id="bank-app"><a href="index.html">Bank App</a></div>' + 
        '<div> <h2 href="index.html">Admin</h2></div>';
        document.querySelector('#modal-div').style.display = 'none';
    } 

    document.querySelector('#recordLinks').addEventListener('click',function (){
        // let nextSibling = document.querySelector('#recordLinks').nextElementSibling;
        // let rows = nextSibling.rows;
        // let row1 = document.querySelector('#row1');
        document.querySelector('#record-table').style.display = "block";
        // document.querySelector('#row2').style.display = 'none';
        document.querySelector('#bank-record').style.display = 'flex';
    },true);


    // adminTask to activate/deactivate
    let activate = document.querySelectorAll('.btn-activate');
    let deactivate = document.querySelectorAll('.btn-deactivate');
    let details_cell = document.querySelectorAll('#active-not td.details');
    
    for (let i = 0; i < activate.length; i++) {
        if(activate[i]){
            activate[i].addEventListener('click',function () {
                for (let j = 0; j < details_cell.length; j++) {
                    if (i == j) {
                        let strike = details_cell[j].style.textDecoration;
                        if(strike == 'line-through'){
                            let response =  prompt('Would you like to Activate this account?');
                            if(response == 'yes' || response == 'Yes'){
                                details_cell[j].style.textDecoration = 'none';
                            }
                            else if(response == '' || response == 'no' || response == null || response == 'No' ){
                                return;
                            }
                        }
                        else{
                            alert('This account is active');
                        }
                    }
                }
            });
        }  
        if(deactivate[i]){
            deactivate[i].addEventListener('click',function () {
                for (let j = 0; j < details_cell.length; j++) {
                    if (i == j) {
                       let response =  prompt('Would you like to Deactivate this account?');
                        if(response == '' || response == 'no' || response == null || response == 'No' ){
                            return;
                            // details_cell[j].style.textDecoration = 'line-through';
                        }
                        else if(response == 'yes' || response == 'Yes'){
                            details_cell[j].style.textDecoration = 'line-through';
                        }
                    }
                }
            });
        } 
    }

    // let parent = document.querySelector('#recordLinks').parentNode;
    // let record_nodes = document.querySelector('#recordLinks').children;
    // for (let i = 1; i < record_nodes.length; i++) {
    //    if (record_nodes[i]) {
    //        record_nodes[i].addEventListener('click',function(event)
    //        {
    //            let nextSibling = document.querySelector('#recordLinks').nextElementSibling;
    //            let rows = nextSibling.rows;
    //             let row1 = document.querySelector('#row1');
    //            let txt= "";
           
    //            for (let j = 1; j < rows.length; j++) 
    //            {
    //             let siblings = rows[j].parentNode.children;
    //             let prev = siblings[j].previousElementSibling;
    //             let next = siblings[j].nextElementSibling;
                  
                    
    //             }
    //             console.log(txt);
    //         event.preventDefault();
    //        },true);
    //    }
    // }
    
    
    // for (let i = 1; i < siblings.length; i++) {
    //     if (siblings[i] != act_deact) {
    //         // console.log(siblings[i]);
    //         act_deact.style.display = 'block';
    //         siblings[i].style.display = 'none';
    //     }
        
    // }

    // let queryDiv = document.querySelector('#recordLinks').childNodes;
    // alert(queryDiv.length);
        // for(let i = 0; i < queryDiv.length; i++){
        //         if(queryDiv[i].addEventListener('click',loopRecord)){
        
        //         }
        //     }
        
            // function loopRecord(){
            //     document.querySelector('#record-table').style.display = "block";
            //     document.querySelector('#displayThis').style.display = 'none';
            //     document.querySelector('#row2').style.display = 'none';
            //     document.querySelector('#bank-record').style.display = 'flex';
            // }

}

function debitAccounts(){
    let debitAccounts = document.querySelector('#debit-acct');
    let siblings = debitAccounts.parentNode.children;
    for (let i = 1; i < siblings.length; i++) {
        if (siblings[i] != debitAccounts) {
            // console.log(siblings[i]);
            debitAccounts.style.display = 'block';
            siblings[i].style.display = 'none';
        }
        
    }
    return false;
}

function creditAccounts(){
    let creditAccounts = document.querySelector('#credit-acct');
    let siblings = creditAccounts.parentNode.children;
    for (let i = 1; i < siblings.length; i++) {
        if (siblings[i] != creditAccounts) {
            // console.log(siblings[i]);
            creditAccounts.style.display = 'block';
            siblings[i].style.display = 'none';
        }
        
    }
    return false;
}
// function bankAccounts(){
//     document.querySelector('#table').style.display = "block";
//     document.querySelector('#displayThis').style.display = 'none';
//     document.querySelector('#bank-record').style.display = 'none';
//     return false;
// }
function accountRecord(){
    document.querySelector('#table').style.display = "none";
    document.querySelector('#displayThis').style.display = 'none';
    document.querySelector('#bank-record').style.display = 'block';
    return false;
}


// admin js
function adminOne(){
    let act_deact = document.querySelector('#active-not');
    let siblings = act_deact.parentNode.children;
    for (let i = 1; i < siblings.length; i++) {
        if (siblings[i] != act_deact) {
            // console.log(siblings[i]);
            act_deact.style.display = 'block';
            siblings[i].style.display = 'none';
        }
        
    }
    // document.querySelector('#active-not').style.display = "block";
    // document.querySelector('#displayThis').style.display = 'none';
    // document.querySelector('#bank-record').style.display = 'none';
    // document.querySelector('#table').style.display = 'none';
    // document.querySelector('#delete-account').style.display = 'none';
    return false;
}

function adminViewAccounts(){
    let allAccounts = document.querySelector('#table');
    let siblings = allAccounts.parentNode.children;
    for (let i = 1; i < siblings.length; i++) {
        if (siblings[i] != allAccounts) {
            // console.log(siblings[i]);
            allAccounts.style.display = 'block';
            siblings[i].style.display = 'none';
        }
        
    }
    return false;
}

function adminCheckRecord(){
    let act_record = document.querySelector('#bank-record');
    let siblings = act_record.parentNode.children;
    for (let i = 1; i < siblings.length; i++) {
        if (siblings[i] != act_record) {
            // console.log(siblings[i]);
            act_record.style.display = 'block';
            siblings[i].style.display = 'none';
        } 
    }
    return false;
}
function deleteAccount(){
    let delete_act = document.querySelector('#delete-account');
    let siblings = delete_act.parentNode.children;
    for (let i = 1; i < siblings.length; i++) {
        if (siblings[i] != delete_act) {
            // console.log(siblings[i]);
            delete_act.style.display = 'block';
            siblings[i].style.display = 'none';
        }
        
    }
    return false;
}