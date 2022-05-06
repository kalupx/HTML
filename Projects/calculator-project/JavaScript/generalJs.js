//arrumar dps

var ctr = false;
var parentesisCtr = false;
var isPercent = false;
var percentNumber = 0;
var percent = 'teste';


function Sum(number){
    if(ctr === true){
        if((number === '+' || number === '-' || number === '/' || number === '*')){
            ctr = false;
        }else{
            document.getElementById('numero').value = '';
            ctr = false;
        }
    }
    var num =  document.getElementById('numero').value;
    if(number === 'cls'){
        document.getElementById('numero').value = '';
    }else if(number === 'del'){
        num = num.substring(0, num.length - 1);
        document.getElementById('numero').value = num;
    }else if(number === 'parentesis'){
        if(!parentesisCtr){
            document.getElementById('numero').value += '(';
            parentesisCtr = !parentesisCtr;
        }else{
            document.getElementById('numero').value += ')';
            parentesisCtr = !parentesisCtr;
        }
    }else if(number === '%'){
        //porcentagem//percentage->numero antes da virgula
        percent = document.getElementById('numero').value;
        percent = parseFloat(percent);
        document.getElementById('numero').value += number;
        percent /= 100;
        isPercent = true;
    }else if(number === '='){
        if(isPercent){
            // num = num.substring(0, num.length - 1);
            percentNumber = percentNumber.substring(percentNumber.indexOf("%") + 1, percentNumber.length);
            percentNumber = parseFloat(percentNumber);
            document.getElementById('numero').value = percent * percentNumber;
            isPercent = false;
        }else{
            document.getElementById('numero').value = eval(num);
        }
        ctr = true;
    }else{
        document.getElementById('numero').value += number;
        if(isPercent){
            percentNumber = document.getElementById('numero').value;
        }
    }
}
