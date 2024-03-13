import React from "react";
import TextFieldInput from "components/Inputs/TextField";
import ButtonOutlined from "components/Buttons/outlined";
import PasswordInput from "components/Inputs/Password";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

//icons import
import useFormikConfig, { IRegister } from "./form";

//css import
import "./index.scss";
import axios from "axios";
import Swal from "sweetalert2";

type Props = {};

const Signup = (props: Props) => {
  // Some mutation that we want to get the state for
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      try {
        const response = await axios.post(
          "http://localhost:4000/auth/register",
          newPost
        );
        console.log(response);
      } catch (err: any) {
        Swal.fire(err);
      }
    },
  });

  const formikConfig = useFormikConfig(mutation);

  return (
    <form onSubmit={formikConfig.handleSubmit}>
      <div className="signup-wrapper">
        <p>Sign up to your E-Learning Account.</p>

        <TextFieldInput<IRegister>
          text="Full Name"
          name="fullName"
          formikConfig={formikConfig}
        />
        <TextFieldInput<IRegister>
          text="Email"
          name="email"
          formikConfig={formikConfig}
        />
        <PasswordInput<IRegister>
          text="Password"
          name="password"
          formikConfig={formikConfig}
        />
        <ButtonOutlined
          type="submit"
          text="Sign Up"
          variant="contained"
          style={{ color: "white" }}
        />
      </div>
    </form>
  );
};

export default Signup;
