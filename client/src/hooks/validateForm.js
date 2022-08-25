export const validateForm = (form) => {
  console.log(form, "form de las validaciones");
  let errors = {};
  //let regexPassword = { /^(?=.*[0-9])(?=.*[az])(?=.*[AZ])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/};
  let regexPassword = {
    min: /(?=.*[az])/,
    may: /(?=.*[AZ])/,
    blanks: /(?=\\S+$)/,
    letters: /.{6, 10}$/,
  };
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; //letras y numeros, puntos, guiones,arroba
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/; //acepta letras y espacios, caracteres ajenos al ingles como la ñ

  if (!form.name) {
    errors.name = "Requerido";
  } else if (!regexName.test(form.name)) {
    errors.name = "Solo se aceptan letras y espacios en blanco";
  }
  if (!form.last_name) {
    errors.last_name = "Requerido";
  } else if (!regexName.test(form.last_name)) {
    errors.last_name = "Solo se aceptan letras y espacios en blanco";
  }

  if (!form.email) {
    errors.email = "Requerido";
  } else if (!regexEmail.test(form.email)) {
    errors.email = "Dirección de email inválida";
  }

  if (!form.password) {
    errors.password = "Requerida";
  } else {
    if (!regexPassword.min.test(form.password)) {
      errors.passwordMin = "Se requiere al menos una letra minuscula";
    }
    if (!regexPassword.may.test(form.password)) {
      errors.passwordMay = "Se requiere al menos una letra mayuscula";
    }
    if (!regexPassword.blanks.test(form.password)) {
      errors.passwordBlanks = "No se permiten espacios";
    }
    if (!regexPassword.letters.test(form.password)) {
      errors.passwordLetters =
        "Se requiere un mínimo de 6 caracteres y un máximo de 10 ";
    }
  }

  if (Object.keys(form.document).length > 9) {
    errors.document = "Maximo de numeros ingresados es 9";
  }

  return errors;
};
