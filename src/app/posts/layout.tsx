import AppsContainer from "@/components/Layout/AppsContainer";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <AppsContainer>{children}</AppsContainer>;
};

export default layout;
