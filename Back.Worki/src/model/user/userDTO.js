const userDTO = (
    userCompanyNumber,
    firstName,
    lastName,
    gender,
    email,
    phoneNumber,
    address,
    taxID,
    birthDate,
    createdBy,
    documentType
  ) => {
    if (firstName == undefined || firstName === '' || firstName == null )
      throw new Error('firstName is not valid');
  
    if (lastName == undefined || lastName === '' || lastName == null)
      throw new Error('lastName is is not valid');
  
    if (email != undefined && email !== '' && email != null) {
      if (!validateEmail(email))
        throw new Error('Email is not a valid email address');
    }
  
    if(phoneNumber == undefined || email ==  '' || email ==  null)
      phoneNumber == undefined;
  
    if( birthDate == '')
      birthDate = null;
  
    if (taxID == undefined || taxID === '' || taxID == null) 
      throw new Error('taxID is undefined');
  
    if (createdBy == undefined || createdBy === '' || createdBy == null)
      throw new Error('createdBy is not valid');
  
    if (documentType == undefined || documentType === '' || documentType == null)
      throw new Error('document type is not valid');
  
    return {
      userCompanyNumber: userCompanyNumber,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      taxID: taxID,
      birthDate: birthDate,
      created: new Date(),
      createdBy: createdBy,
      updated: null,
      updatedby: null,
      documentType: documentType,
    };
  };
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:ñÑ\s@"]+(\.[^<>()\[\]\\.,;:ñÑ\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  module.exports = userDTO;
  