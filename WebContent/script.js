$(document).ready(
	function(){					
		$("#botaoCopiar").click(copiarTexto);
		$("#botaoClone").click(cloneBotao);
	}						
);
			
function copiarTexto(){
								
	var novoTexto= $("#entradaTexto").val();
	$("#saidaTexto").append(novoTexto + "<br/>");
}

function cloneBotao(){

	$("#botaoCopiar").clone(true).appendTo("#divBotaoCopiar");
}