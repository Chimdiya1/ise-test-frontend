import React from "react";
import Image from "next/image";
import LoginForm from "@/app/components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1 className="mt-8 font-semibold text-2xl text-center mb-10">
        Ise Login
      </h1>

      <div className="">
       
        <LoginForm />
      </div>
      <p className="mt-10 text-center">Email Address: fortunechimdiya@gmail.com</p>
      <p className="mt-2 text-center">Password: isetestpass</p>
    </div>
  );
};

export default LoginPage;
