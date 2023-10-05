import React from "react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { GlobalStyle } from "../styles";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const MainLayout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Header />
      <StyledMainSection>{children}</StyledMainSection>
      <Footer />
    </>
  );
};

export default MainLayout;

const StyledMainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: auto;
`;
