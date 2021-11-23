const postDTO = (
  title,
  description,
  status,
  file,
  id_user,
  id_category
) => {

  if (title == undefined || title === '' || title == null)
    throw new Error('title is not valid');

  if (description == undefined || description === '' || description == null)
    throw new Error('description is is not valid');

  if (status != true && status != false)
    throw new Error('status is not valid');

  const num = Number(id_user);
  if (num == undefined || num <= 0 || Number.isNaN(num))
    throw new Error('id_user is not valid');

  const num1 = Number(id_category);
  if (num1 == undefined || num1 <= 0 || Number.isNaN(num1))
    throw new Error('id_category is not valid');


  return {
    title: title,
    description: description,
    status: status,
    file: file,
    id_user: id_user,
    id_category: id_category,
    created: new Date(),
    updated: null
  };
};

module.exports = postDTO;
