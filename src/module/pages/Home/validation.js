import * as yup from 'yup';

export const validate = async (form) => {
  const schema = await yup.object().shape(
    {
      documentType: yup.string().required('Campo requerio'),
      documentNumber: yup.string().required('Campo requerio'),
      phone: yup.string().required('Campo requerio'),
      plate: yup.string().required('Campo requerio'),
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
