	
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

var total = document.getElementById('total');
var publico_total = document.getElementById('publico_total');
var discapacitado_total = document.getElementById('discapacitado_total');

var publico_quantity = document.getElementById('publico_quantity');
var publico_price = document.getElementById('publico_price');
var publico_subtotal = document.getElementById('publico_subtotal');
var discapacitado_quantity = document.getElementById('discapacitado_quantity');
var discapacitado_price = document.getElementById('discapacitado_price');
var discapacitado_subtotal = document.getElementById('discapacitado_subtotal');

var motriz_quantity = document.getElementById("motriz_quantity");
var intelectual_quantity = document.getElementById("intelectual_quantity");
var visual_quantity = document.getElementById("visual_quantity");

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


	if (element == "publico_quantity"){
		publico_quantity.innerHTML = value;
		publico_subtotal.innerHTML = value * parseFloat(publico_price.innerHTML);
	}else{
		discapacitado_quantity.innerHTML = value;
		discapacitado_subtotal.innerHTML = value * parseFloat(discapacitado_price.innerHTML);
	}

}

function continue_to_dishability(){
	var limit = parseInt(publico_quantity.innerHTML) + parseInt(discapacitado_quantity.innerHTML);

	if (limit <= 0){
		alert("Para continuar debes seleccionar minimo un boleto");
	}else{

		total.innerHTML = parseFloat(publico_subtotal.innerHTML) + parseFloat(discapacitado_subtotal.innerHTML);
		publico_total.innerHTML = publico_quantity.innerHTML;
		discapacitado_total.innerHTML = discapacitado_quantity.innerHTML;
	}
}

function change_dishability(element, operation){
	
	var value = document.getElementById(element).innerHTML;
	var limit = discapacitado_total.innerHTML;
	var motriz = motriz_quantity.innerHTML;
	var intelectual = intelectual_quantity.innerHTML;
	var visual = visual_quantity.innerHTML;

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

function back_to_tickets(){
	motriz_quantity.innerHTML = 0;
	intelectual_quantity.innerHTML = 0;
	visual_quantity.innerHTML = 0;
}

function continue_to_payment(){
	var dishability_total = parseInt(discapacitado_total.innerHTML); 
	var dishability_selected = parseInt(motriz_quantity.innerHTML) + parseInt(intelectual_quantity.innerHTML) + parseInt(visual_quantity.innerHTML);

	if (dishability_total != dishability_selected){
		alert("Para continuar debes especificar todas las discapacidades");
	}else{
		alert("es hora de pagar");
	}
}

function muestra(){
	var value = document.getElementById('motriz_quantity').innerHTML;
	alert(value);
}