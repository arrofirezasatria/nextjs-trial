import React from "react";

const loading = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((item, index) => {
          return <div key={index}>...loading</div>;
        })}
    </>
  );
};

export default loading;
