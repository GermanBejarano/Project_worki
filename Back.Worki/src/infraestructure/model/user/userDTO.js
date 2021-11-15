const userDTO = (
  name,
  lastname,
  email,
  pass,
  rol,
  companyid
) => {

  if (name == undefined || name === '' || name == null)
    throw new Error('name is not valid');

  if (lastname == undefined || lastname === '' || lastname == null)
    throw new Error('lastname is is not valid');

  if (email != undefined && email !== '' && email != null) {
    if (!validateEmail(email))
      throw new Error('Email is not a valid email address');
  }

  if (pass == undefined || pass === '' || pass == null)
    throw new Error('password is is not valid');

  if (rol == undefined || rol === '' || rol == null)
    throw new Error('rol is undefined');

  const num = Number(companyid);
  if (num == undefined || num <= 0 || Number.isNaN(num))
    throw new Error('companyid is not valid');

  return {
    nameuser: name,
    lastname: lastname,
    email: email,
    pass: pass,
    img: null,
    state: null,
    professional_tastes: null,
    not_bother: false,
    rol: rol,
    id_position: null,
    id_company: companyid,
    created: new Date(),
    updated: null
  };
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:ñÑ\s@"]+(\.[^<>()\[\]\\.,;:ñÑ\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
module.exports = userDTO;
