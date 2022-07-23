import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.cardColor};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
  position: absolute;
  z-index: 999;
  top: 2rem;
  right: 2rem;
  bottom: 0;
  margin: 0;
  padding: 0;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.cardColor};
  transition: all 0.5s ease;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primaryText};
  transition: all 0.5s ease;
  font-size: 15rem;
  margin: 0;
  padding: 0;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.secondaryText};
  font-size: 18px;
  transition: all 0.5s ease;
`;

const Splash = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  const icon =
    props.theme === "light" ? (
      <HiMoon size={30} color="#000080" />
    ) : (
      <CgSun size={30} color="#c69f26" />
    );

  return (
    <Page>
      <Wrap>
        <Title>
          <span style={{ letterSpacing: "9rem" }}>MARCX</span>
        </Title>
        <TagLine>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis
          dolor distinctio nisi temporibus molestias nesciunt, numquam maiores
          voluptatibus atque sint magni eligendi repudiandae quis esse natus
          consequatur! Nihil, a.
        </TagLine>
      </Wrap>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
    </Page>
  );
};

export default Splash;
