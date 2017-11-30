	
$(document).ready(function(){
	$('.slider').slider();
});

$(".dropdown-button").dropdown();

$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

$(document).ready(function() {
	$('select').material_select();
});
        

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

function change_tickets(element, operation){
	
	var value =  document.getElementById(element).innerHTML;

	if (operation == "add") {
		value = parseInt(value) + 1;
	}else{
		if(value >0){
			value = parseInt(value) - 1;	
		}
	}


	if (element == "publico_value"){
		document.getElementById('publico_value').innerHTML = value;
		document.getElementById('publico_total').innerHTML = value;
	}else{
		document.getElementById('discapacitado_value').innerHTML = value;
		document.getElementById('discapacitado_total').innerHTML = value;
	}

}

function change_dishability(element, operation){
	
	var value = document.getElementById(element).innerHTML;
	var limit = document.getElementById("discapacitado_total").innerHTML;
	var motriz = document.getElementById("motriz_quantity").innerHTML;
	var intelectual = document.getElementById("intelectual_quantity").innerHTML;
	var visual = document.getElementById("visual_quantity").innerHTML;

	var total = parseInt(motriz) + parseInt(intelectual) + parseInt(visual);

	
		if (operation == "add") {
			if (limit > total){
				value = parseInt(value) + 1;
			}
		}else{
			if (value>0) {
				value = parseInt(value) - 1;
			}
		}

	document.getElementById(element).innerHTML = value;

}

function muestra(){
	var value = document.getElementById('motriz_quantity').innerHTML;
	alert(value);
}