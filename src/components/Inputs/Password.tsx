import TextField from "@mui/material/TextField";
import { FormikProps } from "formik";
import React from "react";

type Props<T> = {
  text: string;
  name: string;
  formikConfig: FormikProps<T>;
};

const PasswordInput = <T,>(props: Props<T>) => {
  const { text, name, formikConfig } = props;
  return (
    <TextField
      id="outlined-password-input"
      label={text}
      type="password"
      name={name}
      autoComplete="current-password"
      className="input-text"
      onChange={formikConfig.handleChange}
    />
  );
};

export default PasswordInput;
