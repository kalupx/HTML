function Sum(number){
    var num =  document.getElementById('numero').value;
    if(number === 'cls'){
        document.getElementById('numero').value = '';
    }else if(number === 'del'){
        num = num.substring(0, num.length - 1);
        document.getElementById('numero').value = num;
    }else if(number === '='){
        document.getElementById('numero').value = eval(num);
    }else{
        document.getElementById('numero').value += number;
    }
}