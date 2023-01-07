function authentication(){
message = document.getElementById('login_message')
username = document.getElementById('username').value
password = document.getElementById('pw').value
if(username == 'admin' && password == '123456'){
 document.getElementById('login_message').innerHTML = 'login success!'} 


else{
    document.getElementById('login_message').innerHTML = 'login fail!'} 
 }

console.log(username = document.getElementById('username').value)
console.log(password = document.getElementById('pw').value)