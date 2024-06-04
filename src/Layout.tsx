import styled from "@emotion/styled";
import Sidebar from "./components/layouts/Sidebar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default Layout;

const MainContent = styled.div`
  margin-left: 300px;
  width: 100%;
  padding: 40px 62px;
  height: 100vh;
`;
