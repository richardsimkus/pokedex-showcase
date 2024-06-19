import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";

const rawAPI = async (endpoint, { method, ...options }) => {
  const response = await axios[method](`${baseURL}${endpoint}`, options);
  if (response.status !== 200) {
    throw response;
  }
  return response.data;
};

export const get = async (endpoint, options) =>
  rawAPI(endpoint, { method: "get", params: { ...options } });

export const patch = async (endpoint, options) =>
  rawAPI(endpoint, { method: "patch", ...options });

export const post = async (endpoint, options) =>
  rawAPI(endpoint, { method: "post", ...options });

export const put = async (endpoint, options) =>
  rawAPI(endpoint, { method: "put", ...options });
