import AuthLayout from "@/Layout/AuthLayout";
import RegisterForm from "@/components/AuthForm/RegisterForm";
import React from "react";

function register() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}

export default register;
