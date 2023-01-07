/**
 * function
 * 
 * DOM
 */
function tinhPTBac2(a,b,c){
    delta = b*b - 4*a*c
    if (delta == 0){
        console.log('pt co  nghiem duy nhat');
        return
    }
    
    if( delta < 0){
        console.log('pt vo nghiem');
        x0 = -b/(2*a)
        return x0
    }
    if(delta > 0){
        cconsole.log(' pt co 2 nghiem')
        x1= (-b + Math.sqrt(delta)) / (2*a)
        x2= (-b - Math.sqrt(delta)) / (2*a)
        return{x1:x1, x2:x2}
    }
    
    
}
d = tinhPTBac2(2, 4, 3)
console.log(d);
div = document.getElementById('mydiv')
div.innerHTML = 'NNT,lop 10';

