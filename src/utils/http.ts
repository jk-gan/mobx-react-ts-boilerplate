import axios from 'axios';

import config from '../config';
import rootStore from '../stores/Root';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const http = axios.create({
  baseURL: config.API_ROOT_URL,
  timeout: 35000,
  headers: defaultHeaders,
});

const fetching = async (
  url: string,
  method: string,
  data?: object,
  header?: object,
): Promise<{}> => {
  const customHeaders = {
    Authorization: `Bearer ${rootStore.authStore.accessToken}`,
  };
  const headers = Object.assign({}, defaultHeaders, customHeaders, header);
  console.log('Fetch url : ', url);
  try {
    console.log('request body: ', data);
    const response = await http({
      method: method.toLowerCase(),
      url,
      data,
      headers,
    });
    console.log('response data: ', response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('error: ', JSON.stringify(error.response.data));
    return Promise.reject(error.response.data);
  }
};

const GET = (uri: string, body?: object, header?: object) => fetching(uri, 'GET', body, header);
const POST = (uri: string, body: object, header?: object) => fetching(uri, 'POST', body, header);
const PATCH = (uri: string, body: object, header?: object) => fetching(uri, 'PATCH', body, header);
const PUT = (uri: string, body: object, header?: object) => fetching(uri, 'PUT', body, header);
const DELETE = (uri: string, body: object, header?: object) => fetching(uri, 'DELETE', body, header);

export default {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE,
};
