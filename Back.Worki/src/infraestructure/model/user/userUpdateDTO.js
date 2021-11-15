const userUpdateDTO = (
    name,
    lastname,
    email,
    pass,
    rol,
    companyid,
    img,
    state,
    professional_tastes,
    not_bother,
    id_position
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
      img: img,
      state: state,
      professional_tastes: professional_tastes,
      not_bother: not_bother,
      rol: rol,
      id_position: id_position,
      id_company: companyid,
      updated: new Date()
    };
  };
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:ñÑ\s@"]+(\.[^<>()\[\]\\.,;:ñÑ\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  module.exports = userUpdateDTO;
  