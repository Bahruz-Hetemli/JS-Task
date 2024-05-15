
function pResult() {
    let input1 = document.getElementById("text1");
    let input2 = document.getElementById("text2");
    let output = document.getElementById("p-output");
    
    output.innerHTML = (Number(input1.value) + Number(input2.value))*2;
    
}

function sResult() {
    let input1 = document.getElementById("text1");
    let input2 = document.getElementById("text2");
    let output = document.getElementById("s-output");

    output.innerHTML = input1.value * input2.value;

}





function quvvet(eded, ustu){
    let cavab=Math.pow(eded,ustu)
    console.log(cavab);
  }
  quvvet()