import axios from "axios";

export const get = (path: string) => {
  return axios.get( `http://localhost:3001/${path}`);
};