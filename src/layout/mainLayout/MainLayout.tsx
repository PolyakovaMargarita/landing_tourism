import React from "react";
import s from "./MainLayout.module.css";
import MainHead from "../../seo/mainHead/MainHead";
import Footer from "@/layout/footer/Footer";
import Header from "@/layout/header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  noindex?: boolean;
  description: string;
  canonical: string | boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Reserve a Trip NOW",
  noindex = false,
  description = "Reserve a Trip NOW! Czech Republic",
  canonical = false,
}) => {

  return (
    <div className="container">
      <MainHead
        title={title}
        noindex={noindex}
        description={description}
        canonical={canonical}
      />
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>

    </div>
  );
};

export default MainLayout;
