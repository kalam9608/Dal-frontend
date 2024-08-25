import React from "react";
import { Formik, Form } from "formik";
import { Box, Stack, Typography, Button, Link } from "@mui/material";
import * as Yup from "yup";
import Textfield from "./FormUi/Textfield";

const registrationSchema = Yup.object({
  phoneNumber: Yup.string()
    .max(10, "Must enter complete phone number")
    .min(10, "Must enter complete phone number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("must be enter phone number"),
});

const intialValues = {
  phoneNumber: "",
};

function LoginForm() {
  return (
    <Formik
      initialValues={intialValues}
      validationSchema={registrationSchema}
      onSubmit={(values) => {
        console.log("values====>", values);
      }}
    >
      {(formik) => (
        <Form>
          <Stack
            pt={10}
            spacing={3}
            sx={{
              px: { xs: "20px", sm: "10px", lg: "80px" },
              width: { sm: "440px", lg: "600px", margin: "auto" },
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "22px", sm: "32px" } }}
                fontWeight="600"
              >
                Login .
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "10px", sm: "14px" },
                  color: " rgba(0, 0, 0, 0.6)",
                }}
                fontWeight="400"
              >
                Enter your phone number to login.
              </Typography>
            </Box>

            <Box>
              <Textfield
                title="Phone Number"
                name="phoneNumber"
                placeholder="Enter your phone number"
              />
            </Box>

            <Box mt={1}>
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
                onSubmit={formik.handleSubmit}
              >
                Login
              </Button>
            </Box>

            <Box display="flex" justifyContent="center" mt="22px">
              <Typography
                sx={{ fontSize: "12px" }}
                fontWeight="500"
                marginBottom={5}
              >
                New user?{" "}
                <Link
                  href="/auth/register"
                  underline="hover"
                  sx={{ fontWeight: "600", fontSize: "12px", color: "black" }}
                >
                  Create account{" "}
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
