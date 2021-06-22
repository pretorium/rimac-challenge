import * as yup from 'yup';
import RegexpTypes from 'utils/mixed';

export const validate = async (form) => {
  const schema = await yup.object().shape(
    {
      documentType: yup.string().required('Campo requerio'),
      documentNumber: yup.string()
        .min(8, 'Mínimo 8 dígitos')
        .required('Número de documento requerio'),
      phone: yup.string()
        .matches(RegexpTypes.phoneNumber, 'Celular incorrecto')
        .min(9, 'Celular incorrecto')
        .required('Celular requerio'),
      plate: yup.string()
        .min(6, 'Placa incorrecta')
        .required('Placa requerida'),
    },
  );

  try {
    const data = await schema.validate(form, { abortEarly: false });
    return { isValid: true, data, errors: {} };
  } catch (err) {
    const errors = {};
    if (err.inner) {
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
    }
    return { isValid: false, data: form, errors };
  }
};

export default validate;
