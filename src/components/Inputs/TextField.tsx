import TextField from "@mui/material/TextField";
import "./index.scss";
import React from "react";
import { FormikProps } from "formik";

type Props<T> = {
  text: string;
  name: string;
  formikConfig: FormikProps<T>;
};

const TextFieldInput = <T,>(props: Props<T>) => {
  const { text, name, formikConfig } = props;
  // const context = useFormikContext<IFormData>();
  return (
    <TextField
      id={name}
      label={text}
      variant="outlined"
      className="input-text"
      name={name}
      onChange={formikConfig.handleChange}
    />
  );
};

export default TextFieldInput;
