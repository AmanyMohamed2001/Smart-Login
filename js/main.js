var singName = document.getElementById('singName');
var singEmail = document.getElementById('singEmail');
var singPassword = document.getElementById('singPassword');
var nameRagex = /[A-Za-z ]/;
var emailRagex = /[A-Za-z]{2,3}$/;
var passwordRagex = /{0-9}$/;
var user = [];

    function add(){
        if(singName.value=='' || singEmail.value=='' || singPassword.value==''){
            document.getElementById('message').innerHTML = 
            `<p class="text-center" >You must enter the text (name, email, and password).</p>`
        }       
        else{
            var obj ={
                name: singName.value,
                email: singEmail.value,
                password: singPassword.value
            }
            user.push(obj);
            location.href="./login/index.html"; 
            localStorage.setItem('user', JSON.stringify('user'));
            clearFrom();
        } 
        console.log('user')
    }


function clearFrom(){
    singName.value,
    singEmail.value,
    singPassword.value
}

 

    

    