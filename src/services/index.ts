import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

export const createApiClient = () => {
  const token = getCookie("token");
  const config: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  };
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return axios.create(config);
};

export const register = (data: object) =>
  createApiClient().post("/api/authentication/register", data);
export const loginService = (data: object) =>
  createApiClient().post("api/authentication/login", data);

export const getProfile = () => createApiClient().get(`/api/user/me`);
export const getCourses = () => createApiClient().get(`/api/courses`);
export const createCourse = (data: object) =>
  createApiClient().post(`/api/courses/create`, data);
