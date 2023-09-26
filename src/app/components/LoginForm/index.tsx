"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react";
import { useMutation } from "react-query";
import { loginService } from "@/services";
import { setCookie } from "cookies-next";
import { IUser } from "@/services/types";
import { Input } from "../Input";
import { toast } from "react-toastify";

const loginSchema = object({
  email: string()
    .email("Please enter a valid email")
    .required("Please enter your email address"),
  password: string().required("Please enter your password"),
});

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "all" });
  const { mutate, isLoading } = useMutation(
    (data: object) => loginService(data),
    {
      onSuccess: (res) => {
        if (res?.data?.data?.access_token) {
          setCookie("token", res?.data?.data?.access_token);
        }
        window.location.href = "/dashboard";
        toast.success("Login successful");
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message ?? "Login Error");
      },
    }
  );

  const login = handleSubmit((d) => {
    console.log(d);
    mutate(d);
  });
  return (
    <form
      className="max-w-[500px] w-full mx-auto space-y-5 flex flex-col justify-center"
      onSubmit={login}
    >
      <div>
        <label htmlFor="email" className="font-semibold inline-block">
          Email Address
        </label>
        <Input
          id="email"
          className="mt-2 focus:outline-0"
          type="email"
          {...register("email")}
          error={errors?.email?.message}
        />
      </div>

      <div>
        <label htmlFor="password" className="font-semibold inline-block">
          Password
        </label>
        <Input
          id="password"
          className="mt-2 focus:outline-0"
          type="password"
          {...register("password")}
          error={errors?.password?.message}
        />
      </div>

      <div className="flex justify-center">
        <button
          className="w-52 py-3 flex justify-center items-center text-white rounded-full bg-violet-600 hover:bg-violet-400 cursor-pointer"
          disabled={!isValid || isLoading}
        >
          Login
          {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
