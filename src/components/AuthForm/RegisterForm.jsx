import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import Textfield from "./FormUi/Textfield";

import DateTime from "./FormUi/DateTime";
import CheckBoxInput from "./FormUi/CheckBoxInput";
import RadioButtonGroup from "./FormUi/RadioButtonGroup";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  dob: "",
  gender: "",
  terms1: false,
  terms2: false,
};
const userSchema = Yup.object({
  firstName: Yup.string().min(2).required("please enter your first name"),
  lastName: Yup.string().min(3).required("please enter your last name"),
  phoneNumber: Yup.string()
    .max(10, "Must enter complete phone number")
    .min(10, "Must enter complete phone number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("must be enter phone number"),
  email: Yup.string().min(3).email().required("please enter your email"),
  dob: Yup.date().required("please enter your Date of birth"),
  terms1: Yup.boolean()
    .oneOf([true], "the terms and condtion must be accepted")
    .required("required"),
  terms2: Yup.boolean()
    .oneOf([true], "the terms and condtion must be accepted")
    .required("required"),
});

const handleFormSubmit = (values, { setSubmitting }) => {
  setSubmitting(true);
  console.log("values====>", values);
  setSubmitting(false);
};

function RegisterForm() {
  return (
    <Box
      sx={{
        px: { xs: "20px", sm: "10px", lg: "80px" },
        paddingTop: { xs: "50px", md: "0px" },
        width: { sm: "440px", lg: "600px", margin: "auto" },
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  sx={{ fontSize: { xs: "22px", sm: "32px" } }}
                  fontWeight="600"
                >
                  Let’s create an account.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "10px", sm: "14px" },
                    color: " rgba(0, 0, 0, 0.6)",
                  }}
                  fontWeight="400"
                >
                  Enter your details and kick start your journey.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Textfield
                  title="First Name"
                  name="firstName"
                  placeholder="Enter your first name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Textfield
                  title="Last Name"
                  name="lastName"
                  placeholder="Enter your last name"
                />
              </Grid>

              <Grid item xs={12}>
                <Textfield
                  title="Phone Number"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                />
              </Grid>

              <Grid item xs={12}>
                <Textfield
                  title="Email"
                  name="email"
                  placeholder="Enter your email address "
                />
              </Grid>
              <Grid item xs={12}>
                <DateTime
                  title="Date of birth (DOB)"
                  name="dob"
                  placeholder="Date of birth (DOB) "
                />
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{ display: { xs: "inline", sm: "flex" } }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography sx={{ fontSize: "14px" }} fontWeight="600">
                    Gender :
                  </Typography>
                  <RadioButtonGroup
                    name="gender"
                    type="radio"
                    value="male"
                    label="male"
                  />
                  <RadioButtonGroup
                    name="gender"
                    type="radio"
                    value="female"
                    label="female"
                  />
                  <RadioButtonGroup
                    name="gender"
                    type="radio"
                    value="other"
                    label="other"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <CheckBoxInput
                  name="terms1"
                  label="Hereby I declare that I have read & I agree to all the T&C of the platform Trading As Profession Data Services."
                />
              </Grid>
              <Grid item xs={12}>
                <CheckBoxInput
                  name="terms2"
                  label="I do authorise Trading As Profession Data Services to call, text, what's app or email me regarding sales, renewals & promotions."
                />
              </Grid>

              <Grid item xs={12} mt={1}>
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
                  disabled={isSubmitting}
                >
                  Create account
                </Button>
              </Grid>

              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                mt="22px"
              >
                <Typography
                  sx={{ fontSize: "12px" }}
                  fontWeight="500"
                  marginBottom={5}
                >
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    underline="hover"
                    sx={{ fontWeight: "600", fontSize: "12px", color: "black" }}
                  >
                    Login here{" "}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default RegisterForm;
