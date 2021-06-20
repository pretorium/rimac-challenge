import { useState, useEffect } from 'react';
import axios from 'axios';
import handleRequest from 'utils/handleRequest';

const doRequest = async (method, uri, form, cancelToken, contentType = 'application/json') => {
  let formData;
  if (contentType === 'multipart/form-data') {
    formData = new FormData();
    Object.keys(form).forEach((property) => {
      formData.set(property, form[property]);
    });
  } else {
    formData = form;
  }

  const config = {
    cancelToken,
  };

  return handleRequest(method, uri, formData, config);
};

const useFetch = ({ uri = '', method = 'get' }) => {
  const [loading, setLoading] = useState(false);
  const { CancelToken } = axios;
  const { token, cancel } = CancelToken.source();

  const replacePrefixApi = (value) => (
    value.includes('/api/') ? value.replace('/api/', process.env.REACT_APP_API_URL) : value
  );

  useEffect(() => () => cancel('component unmount'), []);

  const fetch = async (data = {}, config = {}) => {
    setLoading(true);
    const response = await doRequest(
      config.method || method,
      replacePrefixApi(uri || config.uri),
      data,
      token,
      config.contentType,
    );

    // Delay false for challenge
    await new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve(true);
      }, 1000);
    });

    if (response) {
      return response;
    }

    return () => cancel('component unmount');
  };

  return { loading, fetch };
};

export default useFetch;
