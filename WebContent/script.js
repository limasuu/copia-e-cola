$(document).ready(
	function(){					
		$("#botaoCopiar").click(copiarTexto);
	}						
);
			
function copiarTexto(){
								
	var novoTexto= $("#entradaTexto").val();
	$("#saidaTexto").append(novoTexto + "<br/>");
}