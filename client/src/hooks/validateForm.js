export const validateForm = (form) => {
  console.log(form, "form de las validaciones");
  let errors = {};

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; //letras y numeros, puntos, guiones,arroba
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/; //acepta letras y espacios, caracteres ajenos al ingles como la ñ
  let regexPhone =
    /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
  let regexDocument = /^(7?)\d{7}$/; //cambiar a al menos 7 digitos

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

  if (!form.document) {
    errors.document = "Requerido";
  } else if (!regexDocument.test(form.document)) {
    errors.document = "Debe contener 7 digitos"; //MODIFICAR --> hay DNI cn 7 digitos
  }

  if (!regexPhone.test(form.phone)) {
    errors.phone = "Ingresa un numero de telefono valido";
  }

  if (!form.prepaid_healths.length) {
    errors.prepaid_healths = "Debe seleccionar al menos una opción";
  }
  if (!form.general_area) {
    errors.general_area = "Requerido";
  }
  if (!form.specialty) {
    errors.specialty = "Requerido";
  }
  if (!form.medic_id) {
    errors.medic_id = "Requerido";
  }

  if (!form.email) {
    errors.email = "Requerido";
  } else if (!regexEmail.test(form.email)) {
    errors.email = "Ingresar un email válido";
  }

  return errors;
};
