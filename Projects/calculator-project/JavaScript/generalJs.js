//arrumar dps

var ctr = false;
var parentesisCtr = false;

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
    }else if(number === '='){
        document.getElementById('numero').value = eval(num);
        ctr = true;
    }else{
        document.getElementById('numero').value += number;
    }
}
