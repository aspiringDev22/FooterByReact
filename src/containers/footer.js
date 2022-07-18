import React from "react";
import Footer from "../components/footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Links href="#">Story</Footer.Links>
            <Footer.Links href="#">Clients</Footer.Links>
            <Footer.Links href="#">Testimonials</Footer.Links>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Links href="#">Marketing</Footer.Links>
            <Footer.Links href="#">Consulting</Footer.Links>
            <Footer.Links href="#">Design</Footer.Links>
            <Footer.Links href="#">Development</Footer.Links>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Links href="#">India</Footer.Links>
            <Footer.Links href="#">United States</Footer.Links>
            <Footer.Links href="#">Australia</Footer.Links>
            <Footer.Links href="#">Support</Footer.Links>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Socials</Footer.Title>
            <Footer.Links href="#">Facebook</Footer.Links>
            <Footer.Links href="#">Instagram</Footer.Links>
            <Footer.Links href="#">Youtube</Footer.Links>
            <Footer.Links href="#">Twitter</Footer.Links>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
