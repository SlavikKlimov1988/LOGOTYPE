const rangeTL = document.getElementById('tlr'),
      rangeTr = document.getElementById('trr'),
      rangeBl = document.getElementById('blr'),
      rangeBr = document.getElementById('brr');
     


const resultTl = document.getElementById("result-tlr"),
      resultTr = document.getElementById("result-trr"),
      resultBl = document.getElementById("result-blr"),  
      resultBr = document.getElementById("result-brr");
      

const input = document.querySelectorAll('.input');
const cube = document.querySelectorAll('cube');
const total = document.getElementById('totalResalt');
const btn = document.getElementById('btn');


const chengeRadius = () =>{
    resultTl.innerHTML = rangeTL.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;
   
}


                
for(node of input){
    node.addEventListner('input', chengeRadius);
}                