/** @format */

import React from "react";
import Layout from "../layout";
import { ContactUsForm } from "../components/ContactUs";

const contact = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <ContactUsForm />
      </div>
    </Layout>
  );
};

export default contact;
