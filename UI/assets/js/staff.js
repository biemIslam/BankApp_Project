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

window.onload = function (){
    // function staffFunction() {
        document.querySelector('#nav-bar').innerHTML = '<div id="bank-app"><a href="index.html">Bank App</a></div>' + 
        '<div> <h2 href="index.html">Staff Page</h2></div>'
    // }
    document.querySelector('#recordLinks').addEventListener('click',function (){
        // alert('fghj');
        document.querySelector('#record-table').style.display = "block";
        document.querySelector('#row2').style.display = 'none';
        document.querySelector('#bank-record').style.display = 'flex';
    },true);

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

}