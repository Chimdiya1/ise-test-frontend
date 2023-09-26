import { AxiosResponse } from "axios";
export interface IApiResponse<T> {
  data: T;
  message: string;
  status: string;
  meta?: {
    count: number;
    totalPages: number;
  };
}

export type IResponse<T> = AxiosResponse<IApiResponse<T>>;

export interface ILoginForm {}

export interface IUser {
  id: string;
  email: string;
  fullName: string;
  
}



export interface IUserDetails {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  dob: string;
  gender: string;
  additionalInformation: string;
  residentialInformation: string;
  userId: string;
  sponsor: string;
  role: string;
  createdAt: string;
  updatedAt: "2023-08-13T09:01:43.722Z";
  user: IUser;
}



export interface IPagination {
  page: number;
  size: number;
  totalItems: number;
  totalPages: number;
}

