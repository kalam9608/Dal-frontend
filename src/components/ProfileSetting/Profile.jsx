import React from "react";
import {
  Box,
  Stack,
  Button,
  Grid,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";
import Textfield from "../AuthForm/FormUi/Textfield";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Inputfiled from "./SettingUI/Inputfiled";
import SelectBox from "./SettingUI/SelectBox";

import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import CheckBoxInput from "../AuthForm/FormUi/CheckBoxInput";

const registrationSchema = Yup.object({
  fullName: Yup.string().min(5).required("Please enter your full name"),
  gender: Yup.string().required("please enter your first name"),
  dateOfBirth: Yup.string().required("Please enter your first name"),
  phoneNumber: Yup.string()
    .max(10, "Must enter complete phone number")
    .min(10, "Must enter complete phone number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("must be enter phone number"),
  whatsAppPhoneNumber: Yup.string()
    .max(10, "Must enter complete phone number")
    .min(10, "Must enter complete phone number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("must be enter   whatsApp phone number"),
  email: Yup.string().min(3).email().required("Please enter your email"),
  tradingExperience: Yup.string().required("Please enter your experience"),
  netWorth: Yup.string().required("Please enter networth"),
  disclaimer: Yup.string().required("Required"),

  youTube: Yup.string()
    .matches(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      "Must be entered currect  url"
    )
    .required("Please enter telegram link"),
  telegram: Yup.string()
    .matches(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      "Must be entered currect  url"
    )
    .required("Please enter telegram link"),
  instaGram: Yup.string()
    .matches(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      "Must be entered currect  url"
    )
    .required("please enter instaGram link"),
});

const intialValues = {
  fullName: "",
  gender: "",
  dateOfBirth: "",
  phoneNumber: "9771254402",
  whatsAppPhoneNumber: "",
  email: "",
  tradingExperience: "",
  netWorth: "",
  youTube: "https://www.youtube.com/",
  telegram: "",
  instaGram: "",
  disclaimer: "",
};

const Profile = () => {
  return (
    <Stack paddingX={10} marginTop={5}>
      <Formik
        initialValues={intialValues}
        validationSchema={registrationSchema}
        onSubmit={(value) => console.log(value)}
      >
        {(formik) => (
          <Form>
            <Stack direction="row" spacing={10}>
              <Box width="100%">
                <Inputfiled name="fullName" title="Full Name" />
                <SelectBox
                  title="Select Gender"
                  name="gender"
                  options={[
                    {
                      name: "Male",
                      value: "Male",
                    },

                    {
                      name: "Female",
                      value: "Female",
                    },

                    {
                      name: "Other",
                      value: "Other",
                    },
                  ]}
                />

                <Box marginTop={2}>
                  <FormControl fullWidth>
                    <Typography
                      sx={{ fontSize: "14px" }}
                      fontWeight="500"
                      mb={0.5}
                    >
                      Date of birth:
                    </Typography>
                    <Field name="dateOfBirth">
                      {({ field, form }) => (
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            format="MM/dd/yyyy"
                            inputVariant="outlined"
                            size="small"
                            onChange={(date) => {
                              form.setFieldValue(field.name, date);
                            }}
                            sx={{
                              width: "100%",

                              "& input": {
                                padding: { xs: "10px", lg: "10px" },
                                fontSize: { xs: "12px", lg: "14px" },
                                fontWeight: "500",
                                borderRadius: "5px",
                              },
                              "& input::placeholder": {
                                color: "rgba(0, 0, 0, 0.6)",
                                opacity: "1",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid #5F5F5F",
                              },
                            }}
                          />
                        </LocalizationProvider>
                      )}
                    </Field>
                  </FormControl>
                </Box>

                <Inputfiled name="netWorth" title="Net Worth" />
              </Box>
              <Box width="100%">
                <Inputfiled name="phoneNumber" title="Phone Number" />
                <Inputfiled
                  name="whatsAppPhoneNumber"
                  title="WhatsApp Phone Number"
                />
                <Inputfiled
                  name="tradingExperience"
                  title="Trading Experience"
                />
                <Inputfiled name="email" title="Email Address" />
              </Box>
            </Stack>

            <Stack paddingRight={20} marginTop={5}>
              <Typography
                sx={{
                  fontSize: "26px ",
                  lineHeight: "39px",
                  fontWeight: "500",
                  color: "rgba(27, 27, 27, 0.9)",
                }}
              >
                Social Links
              </Typography>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                marginTop={1}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "38px",
                    borderRadius: "12px",
                    border: "1px solid #1B1B1B",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "4px",
                  }}
                >
                  <TelegramIcon size="large" />
                </Box>
                <Inputfiled name="telegram" />
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                marginTop={1}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "38px",
                    borderRadius: "12px",
                    border: "1px solid #1B1B1B",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "4px",
                  }}
                >
                  <InstagramIcon />
                </Box>
                <Inputfiled name="instaGram" />
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                marginTop={1}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "38px",
                    borderRadius: "12px",
                    border: "1px solid #1B1B1B",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "4px",
                  }}
                >
                  <YouTubeIcon />
                </Box>
                <Inputfiled name="youTube" />
              </Stack>
            </Stack>

            <Stack paddingRight={4} marginTop={5}>
              <Typography
                sx={{
                  fontSize: "26px ",
                  lineHeight: "39px",
                  fontWeight: "500",
                  color: "rgba(27, 27, 27, 0.9)",
                }}
                gutterBottom
              >
                Disclaimers
              </Typography>

              <Typography
                sx={{
                  fontSize: "13px ",
                  lineHeight: "20px",
                  fontWeight: "400",
                  color: "rgba(27, 27, 27, 0.7)",
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </Typography>
              <CheckBoxInput
                name="disclaimer"
                label="I do authorise Trading As Profession Data Services to call, text, what's app or email me regarding sales, renewals & promotions."
              />
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-end"
              paddingRight={4}
              marginY={5}
              spacing={3}
            >
              <Button
                // type="submit"
                variant="outlined"
                sx={{
                  display: { sm: "flex" },
                  textTransform: "capitalize",
                  border: "3px solid #00B4D8",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  display: { sm: "flex" },
                  background: "#00B4D8",
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                submit
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default Profile;
