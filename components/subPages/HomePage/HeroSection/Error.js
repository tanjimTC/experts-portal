import React from "react";

const Error = ({ message }) => {
  return (
    <>
      {message !== undefined ? (
        <p className={"text-red-600 text-sm"}>{message}</p>
      ) : (
        <p className={"text-transparent text-sm select-none"}>no error!</p>
      )}
    </>
  );
};

export default Error;
