const RegexpTypes = {
  numeric: new RegExp('^$|^[0-9]+$'),
  documentDni: new RegExp('^$|^[0-9]{0,8}?$'),
  documentCe: new RegExp('^$|^[0-9a-zA-Z]{0,12}?$'),
  phoneNumber: new RegExp('^$|^9[0-9]{0,8}?$'),
  plate: new RegExp('^$|^[a-zA-Z0-9-]{0,7}?$'),
  plateFormat: new RegExp('^[A-Za-z1-9][A-Za-z1-9][A-Za-z1-9]-[A-Za-z1-9][A-Za-z1-9][A-Za-z1-9]$'),
};

export const getMaskedPlate = (value) => {
  let maskedValue = value;
  const character = value.slice(-1);
  const len = value.length;

  if (character === '-') {
    maskedValue = maskedValue.slice(0, -1);
  } if (value.includes('--')) {
    maskedValue = maskedValue.replace('--', '-');
  } if (len === 3 && !value.includes('-')) {
    maskedValue += '-';
  } if (len === 6 && !value.includes('-')) {
    maskedValue = `${maskedValue.substring(0, 3)}-${maskedValue.substring(3, len)}`;
  }

  return maskedValue.toUpperCase();
};

export default RegexpTypes;
