import Footer from "@/components/footer";
import HomeNavbar from "@/modules/home/components/home-navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <HomeNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
