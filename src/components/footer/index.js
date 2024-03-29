import React from "react";
import { Container, Wrapper, Row, Column, Links, Title } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Links = function FooterLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
