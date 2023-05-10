const validations = (userData) => {
  let errors = {};

  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "el email ingresado no es valido.";
  }
  if (!userData.email) {
    errors.email = "debe ingresar un email.";
  }
  if (userData.email.length > 35) {
    errors.email = "el email no debe superar los 35 caracteres.";
  }

  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "el password tiene que contener al menos un numero.";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "debe ser mas de 6 hasta 10 caracteres";
  }
return errors;
};


export default validations;
