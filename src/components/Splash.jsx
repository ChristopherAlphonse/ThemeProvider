import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Splash = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };
  const Page = styled.div``;
  const Container = styled.div``;
  const Toggle = styled.div`
    cursor: pointer;
  `;

  const icon =
    props.theme === "light" ? (
      <HiMoon size={25} color="#003366" />
    ) : (
      <CgSun size={25} color="#FFDD00" />
    );

  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}> {icon}</Toggle>
        Hello
      </Container>
    </Page>
  );
};

export default Splash;
