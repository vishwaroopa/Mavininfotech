import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import CategoriesBlogPost from "@/components/Blog/CategoriesBlogPost";
import Footer from "@/components/Layout/Footer/Footer";

const Categories = () => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Categories" homeText="Home" homeUrl="/" />

      <CategoriesBlogPost />

      <Footer />
    </>
  );
};

export default Categories;
