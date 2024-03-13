import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";

type Props = {};

const AuthLayout = (props: Props) => {
  const [counter, setCounter] = useState(0);
  const num=0
  return (
    <div className="auth-container">
      <button onClick={() => setCounter((count) => count + 1)}>Click</button>
      {process.env.NODE_ENV} &nbsp; {counter} re24eg
      <Outlet />
    </div>
  );
};

export default AuthLayout;
