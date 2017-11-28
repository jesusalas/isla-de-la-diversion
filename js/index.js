	
$(document).ready(function(){
	$('.slider').slider();
});

$(".dropdown-button").dropdown();


var inicio = document.getElementById('inicio');
var nosotros = document.getElementById('nosotros');
var discapacidad_motriz = document.getElementById('discapacidad_motriz');
var discapacidad_intelectual = document.getElementById('discapacidad_intelectual');
var discapacidad_visual = document.getElementById('discapacidad_visual');
var compra_boletos = document.getElementById('compra_boletos');
var contacto = document.getElementById('contacto');

function show_page(page){
	inicio.classList.add('hide');
	nosotros.classList.add('hide');
	discapacidad_motriz.classList.add('hide');
	discapacidad_intelectual.classList.add('hide');
	discapacidad_visual.classList.add('hide');
	compra_boletos.classList.add('hide');
	contacto.classList.add('hide');

	var pagina = document.getElementById(page);

	pagina.classList.remove('hide');
	
}