/** @format */

import React, { ReactNode } from "react"; // Import ReactNode type
import { NavbarDefault } from "./components/navbar";
import { SimpleFooter } from "./components/footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavbarDefault />
      <div style={{ padding: "1rem" }}>{children}</div>
      <SimpleFooter />
    </>
  );
};

export default Layout;
