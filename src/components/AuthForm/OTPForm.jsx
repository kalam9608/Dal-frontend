import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Box, Stack, Typography, Link, Button } from "@mui/material";
import * as Yup from "yup";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MuiOtpInput } from "mui-one-time-password-input";
import { ErrMessage } from "./FormUi/CheckBoxInput";

const registrationSchema = Yup.object({
  otp: Yup.string()
    .max(5, "Must enter complete otp")
    .min(5, "Must enter complete otp")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("must be enter otp number"),
});

const intialValues = {
  otp: "",
};

function OTPForm() {
  return (
    <Formik
      initialValues={intialValues}
      validationSchema={registrationSchema}
      onSubmit={(values) => {
        console.log("values=====>", values);
      }}
    >
      {({ values, errors, setFieldTouched, setFieldValue }) => (
        <Form>
          <Stack
            pt={10}
            spacing={3}
            sx={{
              px: { xs: "20px", sm: "10px", lg: "80px" },
              width: { sm: "440px", lg: "600px", margin: "auto" },
            }}
          >
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              spacing={3}
            >
              <Link
                href="/auth/login"
                sx={{
                  width: { xs: "35px", sm: "50px" },
                  height: { xs: "35px", sm: "50px" },

                  "& .mui-style-i4bv87-MuiSvgIcon-root": {
                    fontSize: { xs: "1rem", sm: "1.5rem" },
                  },
                  background: "rgba(213, 233, 240, 0.7)",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowBackIosNewIcon />
              </Link>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "10px", sm: "14px" },
                  color: " rgba(0, 0, 0, 0.6)",
                  lineHeight: "18px",
                }}
                fontWeight="400"
              >
                Incorrect Number? <br /> Let’s go back and fix it.
              </Typography>
            </Stack>
            <Box marginTop={5}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "22px", sm: "32px" } }}
                fontWeight="600"
              >
                OTP Verification .
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "10px", sm: "14px" },
                  color: " rgba(0, 0, 0, 0.6)",
                }}
                fontWeight="400"
              >
                Hang on ! You will receive the OTP shortly. <br /> Enter the OTP
                you have received !.
              </Typography>
            </Box>

            {/* OTP Input */}
            <Box>
              <MuiOtpInput
                length={5}
                TextFieldsProps={{ size: "small", placeholder: "-" }}
                value={values.otp}
                onChange={(otp) => {
                  setFieldTouched("otp");
                  setFieldValue("otp", otp);
                }}
                justifyContent="center"
                gap="15px"
                sx={{
                  "& .mui-style-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                    {
                      padding: { xs: "10px", sm: "14px", lg: "16px" },
                      border: `1px solid ${
                        errors.otp ? "red" : "rgba(95, 95, 95, 0.7)"
                      }`,
                      borderRadius: "6px",
                    },
                }}
              />
              <ErrorMessage name="otp" component={ErrMessage} />
            </Box>

            <Box display="flex" justifyContent="end" alignItems="center">
              <Typography sx={{ fontSize: "12px", mr: "6px" }} fontWeight="500">
                Didn’t receive OTP?{" "}
                <Link
                  href="/auth/login"
                  underline="hover"
                  sx={{ fontWeight: "600", fontSize: "12px", color: "black" }}
                >
                  Resend{" "}
                </Link>
              </Typography>
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  display: { sm: "flex" },
                  background: "#00B4D8",
                  textTransform: "capitalize",
                }}
              >
                Verify
              </Button>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default OTPForm;
