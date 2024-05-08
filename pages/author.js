import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import AuthorBlogPost from "@/components/Blog/AuthorBlogPost";
import Footer from "@/components/Layout/Footer/Footer";

const Author = () => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Author" homeText="Home" homeUrl="/" />

      <AuthorBlogPost />

      <Footer />
    </>
  );
};

export default Author;
