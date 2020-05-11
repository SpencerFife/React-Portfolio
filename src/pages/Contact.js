import React from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Header message={"Get in touch with me"} />
      <Wrapper>
        <ContactForm />
      </Wrapper>
    </>
  );
}

export default Contact;
