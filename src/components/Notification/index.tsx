import React from "react";

type Props = {
  text: string;
};

const NotiFicationBanner = ({ text }: Props) => {
  return <div>{text}</div>;
};

export default NotiFicationBanner;
