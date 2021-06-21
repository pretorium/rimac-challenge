const RegexpTypes = {
  numeric: new RegExp('^$|^[0-9]+$'),
  document: new RegExp('^$|^[0-9]{0,9}?$'),
  phoneNumber: new RegExp('^$|^9[0-9]{0,8}?$'),
  plate: new RegExp('^$|^[a-zA-Z0-9]{0,6}?$'),
};

export default RegexpTypes;
