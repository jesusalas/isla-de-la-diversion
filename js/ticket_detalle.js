    $(document).ready(function(){    
        $('#boton-guardar').click(function(){
            var fol = document.getElementById("folio").value;
            var fol = document.getElementById("folio").value;
            var fol = document.getElementById("folio").value;
            var fol = document.getElementById("folio").value;
            var fol = document.getElementById("folio").value;        
            var fol = document.getElementById("folio").value;
            var fol = document.getElementById("folio").value;
            localStorage.setItem("Folio", fol);
            document.getElementById("folio").value = "";
        });   
    });

    $(document).ready(function(){    
        $('#boton-cargar').click(function(){                       
            var folio_cap = localStorage.getItem("Folio");
            document.getElementById("folio_cap").innerHTML = folio_cap;
        });   
    });
