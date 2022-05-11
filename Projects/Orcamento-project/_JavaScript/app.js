class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] === null){
                return false;
            }
        }
        return true;
    }
}

class Bd{

    constructor(){
        let id = localStorage.getItem('id');
        
        if(id === null){
            localStorage.setItem('id', 0);
        }
        
    }
    
    getProximoId(){
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }

    gravar(d){
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d));

        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){

        let despesas = Array();

        let id = localStorage.getItem('id');

        for(let i = 1; i <= id; i++){
            
            let despesa = JSON.parse(localStorage.getItem(i));

            if(despesa != null){
                despesas.push(despesa);
            }
        }
        return despesas;
    }
}

let bd = new Bd();

function cadastrarDespesa(){
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia =document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');
    
    let despesa = new Despesa(
        this.ano = ano.value,
        this.mes = mes.value,
        this.dia = dia.value,
        this.tipo = tipo.value,
        this.descricao = descricao.value,
        this.valor = valor.value
    )
    

    if(despesa.validarDados()){
        bd.gravar(despesa);
    
        $('#modalRegistraDespesa').modal('show');
        
        document.getElementById('Modal_titulo').innerHTML = 'Registro feito com sucesso';
        document.getElementById('modal_titulo_div').className = 'modal-header text-success';
        document.getElementById('modal-conteudo').innerHTML = 'Despesa foi cadastrada com sucesso';
        document.getElementById('modal-btn').innerHTML = 'voltar';
        document.getElementById('modal-btn').className = 'btn btn-success'
    }else{
        $('#modalRegistraDespesa').modal('show');

        document.getElementById('Modal_titulo').innerHTML = 'Há campos que nao foram preenchidos';
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
        document.getElementById('modal-conteudo').innerHTML = 'Há campos que não foram preenchidos';
        document.getElementById('modal-btn').innerHTML = 'voltar e corrigir';
        document.getElementById('modal-btn').className = 'btn btn-danger';
    }
    
}

function carregaListaDespesas(){
    let despesas = Array();
    despesas = bd.recuperarTodosRegistros();
    
    var listaDespesas = document.getElementById('listaDespesas');

    despesas.forEach(function(d){
        let linha = listaDespesas.insertRow();

        linha.insertCell();
        //arumar insert row;
    })
    
}

