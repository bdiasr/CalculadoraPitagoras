// as funções inserts são acionadas toda vez que existe uma modificação do valor do campo de entrada de texto 
function insertCatetoA(num){
    document.getElementById('catetoA').value = num;
    document.getElementById("catetoAValor").innerHTML = num;
}

function insertCatetoB(num){
    document.getElementById('catetoB').value = num;
    document.getElementById("catetoBValor").innerHTML = num;
}

function insertCatetoC(num){
    document.getElementById('catetoC').value = num;
    document.getElementById("HipotenusaValor").innerHTML = num;
}

function limpa(){
    document.getElementById('catetoA').value = '';
    document.getElementById('catetoC').value = '';
    document.getElementById('catetoB').value = '';
    document.getElementById("HipotenusaValor").innerHTML = 'Hipotenusa';
    document.getElementById("catetoBValor").innerHTML = 'Cateto B';
    document.getElementById("catetoAValor").innerHTML = 'Cateto A';
}

function calculaPitagoras(){

    var catetoA, catetoB, hipo; 

    catetoA = document.getElementById('catetoA').value;
    catetoB  = document.getElementById('catetoB').value;
    hipo = document.getElementById('catetoC').value;

    if(document.getElementById('catetoA').value == ''){
        catetoA = hipo*hipo - catetoB*catetoB;
        document.getElementById("catetoA").value = Math.sqrt(catetoA);
        document.getElementById("catetoAValor").innerHTML = Math.sqrt(catetoA);
    }
    if(document.getElementById('catetoB').value == ''){
        catetoB = hipo*hipo - catetoA*catetoA;
        document.getElementById("catetoB").value = Math.sqrt(catetoB);
        document.getElementById("catetoBValor").innerHTML = Math.sqrt(catetoB);
    }
    if(document.getElementById('catetoC').value == ''){
        hipo = catetoA*catetoA + catetoB*catetoB;
        document.getElementById("catetoC").value = Math.sqrt(hipo);
        document.getElementById("HipotenusaValor").innerHTML = Math.sqrt(hipo);
    }
}

