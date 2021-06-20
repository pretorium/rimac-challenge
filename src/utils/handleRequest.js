import axios from 'axios';

const handleRequest = async (method, url, data = null, config = {}) => {
  const methods = {
    get: {
      ...config, method, url, params: { ...data },
    },
    post: {
      ...config, method, url, data,
    },
    put: {
      ...config, method, url, data,
    },
    delete: {
      ...config, method, url, data,
    },
    default: {
      ...config, method, url,
    },
  };

  const requestConfig = methods[method] || methods.default;

  const response = await axios(requestConfig)
    .then((resp) => ({
      ...resp.data,
      status: resp.status,
    }))
    .catch((error) => ({
      ...error.response.data,
      status: error.response.status,
    }));
  return response;
};

export default handleRequest;
