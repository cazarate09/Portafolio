var botonEnviar = document.querySelector("#btnEnviar");


botonEnviar.addEventListener("click", function (event) {
    var pNombres = document.querySelector("#nombres").value;
    
    var pAsunto = document.querySelector("#asunto").value;

    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    var pCorreo = document.querySelector("#correo").value;
    
    var pMensaje = document.querySelector("#mensaje").value

	event.preventDefault();
    
   	if(pNombres == "" )
    {
        alert("Debe ingresar nombres y apellidos");
        document.querySelector("#nombres").focus();
    }

    
    else if(pNombres.length < 10)
    {
        alert("Debe ingresar nombres y apellidos válidos");
        document.querySelector("#nombres").focus();
    }

    else if(!emailRegex.test(pCorreo))
    {
        alert("Correo no válido");
        document.querySelector("#correo").focus();
    }

    else if(pAsunto == "")
    {
        alert("Debe ingresar un asunto de contacto");
        document.querySelector("#asunto").focus();
    }

    else if(pAsunto.length < 10)
    {
        alert("Debe ingresar asunto de mínimo 10 caracteres");
        document.querySelector("#asunto").focus();
    }

    else if(pMensaje == "")
    {
        alert("Debe ingresar un mensaje de contacto");
        document.querySelector("#mensaje").focus();
    }

    else if(pMensaje.length < 10 || pMensaje > 70)
    {
        alert("El mensaje debe tener mínimo 10 caracteres y máximo 70 caracteres");
        document.querySelector("#mensaje").focus();
    }

    else
    {
        document.querySelector("#nombres").value = "";
    
        document.querySelector("#asunto").value = "";
      
        document.querySelector("#correo").value = "" ;
    
        document.querySelector("#mensaje").value = "";
    }
});



