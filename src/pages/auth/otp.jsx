import AuthLayout from "@/Layout/AuthLayout";
import OTPForm from "@/components/AuthForm/OTPForm";
import React from "react";

function otp() {
  return (
    <AuthLayout>
      <OTPForm />
    </AuthLayout>
  );
}

export default otp;
