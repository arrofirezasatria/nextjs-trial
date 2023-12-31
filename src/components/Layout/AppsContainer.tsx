import React from "react";

const AppsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full max-w-2xl mx-auto">{children}</div>;
};

export default AppsContainer;
