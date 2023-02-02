import axios from "axios";

const rootUrl = 'http://localhost:3001/';

export const get = (path: string) => {
  return axios.get( rootUrl + path);
};

export const post = (path:string, data?: any)  => {
  return axios.post(rootUrl + path, data);
};