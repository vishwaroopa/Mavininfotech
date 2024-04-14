import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import Footer from "@/components/Layout/Footer/Footer";

const BlogDetails = () => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Blog Details" homeText="Home" homeUrl="/" />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
