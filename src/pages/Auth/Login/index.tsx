import React from "react";
import TextFieldInput from "components/Inputs/TextField";
import "./index.scss";
import ButtonOutlined from "components/Buttons/outlined";
import PasswordInput from "components/Inputs/Password";

//icons import
import FacebookImg from "images/facebook.svg";
import GoogleImg from "images/google.svg";
import useFormikConfig, { ILogin, LoginResponse } from "./forms";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, post, get } from "api";
import Swal from "sweetalert2";
import { useAppSelector } from "../../../redux/hooks";
import { userSelector } from "../../../redux/features/users/usersSlice";

type Props = {};

const Login = (props: Props) => {
  const selectedUsers = useAppSelector(userSelector);
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      try {
        const response = await post<ILogin, LoginResponse>("/auth/login", {
          email: "indlevel50@gmail.com",
          password: "1232345",
        });
        console.log(response, "res123");
      } catch (err: any) {
        console.log(err, "err123");
        Swal.fire(err);
      }
    },
  });
  const formikConfig = useFormikConfig(mutation);
  return (
    <form onSubmit={formikConfig.handleSubmit}>
      <div className="login-wrapper">
        <p>Login to your E-Learning Account.</p>
        <TextFieldInput<ILogin>
          text="Email"
          name="email"
          formikConfig={formikConfig}
        />

        <PasswordInput<ILogin>
          text="Password"
          name="password"
          formikConfig={formikConfig}
        />
        <ButtonOutlined
          type="submit"
          text="Log In"
          variant="contained"
          style={{ color: "white" }}
        />
      </div>
      {/* <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          const authToken = document.cookie
            .split("; ")
            .find((row) => row.startsWith("access_token="))
            ?.split("=")[1];
          console.log(authToken);

          const response = get<ILogin>("/auth/home", {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
            .then((response) => {
              // Handle successful response
              console.log("Login response:", response);
            })
            .catch((error) => {
              // Handle error
              console.error("Error logging in:", error);
            });
        }}
      >
        wrfwrf
      </button> */}
    </form>
  );
};

export default Login;
