import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
export interface ILogin {
  email: string;
  password: string;
}
export interface LoginResponse {
  // Define the structure of your login response data here
  data: any;
}

const useFormikConfig = (doSignup: any) => {
  return useFormik<ILogin>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: (values) => {
      doSignup.mutate(values);
    },
  });
};

// export const SignupAPi = async (data: MyFormValues) => {
//   const response = await fetch("http://localhost:3000/api/postData", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const responseData = await response.json(); // Assuming response is JSON
//   return responseData;
// };

export default useFormikConfig;
