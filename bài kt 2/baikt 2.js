function authentication(){
    ho = document.getElementById('ho').value
    message = document.getElementById('message')
    name = document.getElementById('name').value
    years = document.getElementById('years').value
    phone = document.getElementById('phone').value
    nam = document.getElementById('nam').value
    nu = document.getElementById('nu').value

  
   if( name == undefined && ho== undefined && years == undefined && phone == undefined && nam == undefined && nu == undefined){
    document.getElementById('message').innerHTML = 'Nhập Thiêu Thông Tin!'} 
    else{
        document.getElementById('login_message').innerHTML = 'nhập đủ thông tin'} 
   
   
}
