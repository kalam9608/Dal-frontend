import AuthLayout from "@/Layout/AuthLayout";
import LoginForm from "@/components/AuthForm/LoginForm";
import React from "react";

function login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default login;
