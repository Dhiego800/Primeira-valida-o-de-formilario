const $ = document.querySelector.bind(document);

const formUser = $("#formuser");
var inNome = $(".input-nome");
var inEmail = $(".input-email");
var inNascimento = $("#input-nascimento");
var inRg = $(".input-rg");
var inCpf = $(".input-cpf");
const btoLimpar = $(".bto-limpar");
const btoEnviar = $(".bto-enviar");

//validando nome e cpf por quantidade de caracteres.
function validacao() {
   
    var erro = false;
    if(inNome.value.indexOf(" ") == -1) {
        alert("Preencha o nome corretamente")
        erro = true;
    }
    if(inCpf.value.lenght != 11) {
        alert("Preencha o CPF corretamente")
        erro = true;
    }

}

function validadata(){
	var data = inNascimento.value;
	data = data.replace(/\//g, "-");
	var data_array = data.split("-");

//trocando formato da data

	if(data_array[0].lenght != 4) {
		data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; //trocando de dd/mm/aaaa para aaaa/mm/dd
	}

// comparando as datas e calculo de idade

	var hoje = new Date();
	var nasc = new Date(data);
	var idade = hoje.getFullYeyar()  - nasc.getFullYeyar();
	var mes = hoje.getMonth() - nasc.getMonth(); 
	if(mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) idade--;



		if(idade < 18){
			alert("Pessoas menores de 18 não podem se cadastrar.");
			return false;
		}

		if(idade >= 18 && idade <= 60){
			alert("Maior de 18, pode se cadastrar.");
			return true;
		}
		
		// se for maior que 60 nada acontece.
		return false;
	}

btoLimpar.addEventListener("click", function(){
    formUser.reset();
});

btoEnviar.addEventListener("click", function(event){
    event.preventDefault();	
    validacao();
    validadata();
});