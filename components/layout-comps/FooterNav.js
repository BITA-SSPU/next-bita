import React from "react";
import { Footer } from "flowbite-react";

function FooterNav() {
  return (
    <Footer bgDark={true} container={true}>
      <Footer.Copyright href="#" by="BITA™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default FooterNav;
