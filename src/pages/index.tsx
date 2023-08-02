/** @format */

import React from "react";
import Layout from "../layout";
import { CarouselTransition } from "../components/carousel";
import Example from "../components/video";
import { Blog } from "../components/Blog";

const IndexPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <CarouselTransition />
        <Blog />
        <Example />
      </div>
    </Layout>
  );
};

export default IndexPage;
