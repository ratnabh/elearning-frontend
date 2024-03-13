import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import { UseMutateFunction } from "@tanstack/react-query";
export interface IRegister {
  fullName: string;
  email: string;
  password: string;
}

const useFormikConfig = (doSignup: any) => {
  return useFormik<IRegister>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("Username required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      doSignup.mutate(values);
    },
  });
};

// export const SignupAPi = async (data: IRegister) => {
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
