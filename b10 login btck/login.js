function authentication(){
    message = document.getElementById('login_message')
    username = document.getElementById('username').value
    password = document.getElementById('pw').value
    email = document.getElementById('email').value
    if(username == 'admin' && password == '123456' && email == 'admin@gmail.com'){
     document.getElementById('login_message').innerHTML = 'login Success!'} 
    
    
    else{
        document.getElementById('login_message').innerHTML = 'login fail!'} 
        window.location.href = 'home.html'
     }


