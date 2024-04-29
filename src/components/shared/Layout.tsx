import { themeWidth } from "@/themes/variable";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 20px;
`;

const Content = styled.div`
  max-width: ${themeWidth.main};
  margin: 50px auto;
`;