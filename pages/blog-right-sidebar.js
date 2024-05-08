import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import BlogWithRightSidebar from "@/components/Blog/BlogWithRightSidebar";
import Footer from "@/components/Layout/Footer/Footer";

const BlogRightSidebar = () => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Blog" homeText="Home" homeUrl="/" />

      <BlogWithRightSidebar />

      <Footer />
    </>
  );
};

export default BlogRightSidebar;
