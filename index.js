const start = () => {
    document.getElementById("nombre").addEventListener("blur", validar);
    document.getElementById("apellido").addEventListener("blur", validar);
    document.getElementById("mail").addEventListener("blur", validar);
    document.getElementById("tel").addEventListener("blur", validar);
    document.getElementById("date").addEventListener("blur", validar);
    document.getElementById("patente").addEventListener("blur", validar);
    document.getElementById("pass").addEventListener("blur", validar);
  };
  
  window.onload = start;

  const patterns = {
        "nombre" : /^[a-zA-Z\s]{1,25}$/,
        "apellido" : /^[a-zA-Z\s]{1,25}$/,
        "mail" : /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})/,
        "tel" : /^(\+54)?\s?\d{2}\s?-?\d{4}\s?-?\d{4}$/,
        "date" : /([12]\d{3})(-|\/)(0[1-9]|1[0-2])(-|\/)(0[1-9]|[12]\d|3[01])/,
        "patente" : /^[A-Z]{2}\s?\d{3}\s?[A-Z]{2}$/,
        "pass" : /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040-/_\.|,:;])(?=.*[A-Z])(?=.*[a-z])\S{8,12}$/
  }

  const validar = (e) => {
    const pattern =  patterns[`${e.target.id}`] ;
    const contenido = e.target.value;
    const idError = `l${e.target.id}`;
    console.log(pattern, contenido, idError);
    pattern.test(contenido) ? console.log("OK") : console.log("Error");
    pattern.test(contenido) ? (document.getElementById(`${idError}`).innerHTML = "") : (document.getElementById(`${idError}`).innerHTML = "Campo invalido");
  }

  /*
  VALIDACIONES:
  - Nombre: 1 a 25 letras
  - Apellido: 1 a 25 letras
  - Mail: Comienza con letras/caracteres especiales, 1 arroba, letras o punto, 1 punto, de 2 a 6 letras
  - Tel: +54 opcional, 2 números, espacio o guión opcional, 4 números, espacio o guión opcional, 4 números
  - Date: Año (comienza con 1 o 2 y luego 3 números), mes (comienza con 0 y termina de 1 a 9, o comienza con 1 y termina con 0 a 2), día ( comienza con 0 y termina con 1 a 9, o comienza con 1 o 2 y termina con cualquier número, o empieza con 3 y termina con 0 o 1)
  - Patente: 2 letras mayúsculas, espacio opcional, 3 números, espacio opcional, 2 letras mayúsculas
  - Pass: Debe tener al menos 1 mayuscula, al menos 1 minúscula, al menos 1 número, al menos 1 caracter especial, tener entre 8 y 12 caracteres
  */