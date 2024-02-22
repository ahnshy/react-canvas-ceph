import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import mainLogo from "../assets/logo.svg";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  z-index: 100;
  padding: 0 40px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Image = styled.div`
  background: url(${mainLogo}) no-repeat center center;
  background-size: 150px;
  margin-right: auto;
  width: 160px;

  @media (max-width: 768px) {
    margin-right: 0;
    background-size: 110px;
  }
`;

const Li = styled.li`
  width: 140px;
  text-align: center;
  font-size: 20px;
  border-bottom: 3px solid ${(props) => (props.current ? "#E30914" : "transparent")};

  @media (max-width: 768px) {
    width: 60px;
    font-size: 16px;
  }
`;

const ScLink = styled(Link)`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.current ? "#E30914" : "white")};

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Header = ({ location: { pathname } }) => {
    return (
        <HeaderContainer>
            <Ul>
                <Image>
                    <ScLink to="/"></ScLink>
                </Image>
                <Li current={pathname === "/" && true}>
                    <ScLink to="/" current={pathname === "/" && true}>
                        홈
                    </ScLink>
                </Li>
                <Li current={pathname.includes("/movie") && true}>
                    <ScLink to="/movie" current={pathname.includes("/movie") && true}>
                        영화
                    </ScLink>
                </Li>
                <Li current={pathname.includes("/tv") && true}>
                    <ScLink to="/tv" current={pathname.includes("/tv") && true}>
                        TV
                    </ScLink>
                </Li>
                <Li current={pathname.includes("/search") && true}>
                    <ScLink to="/search" current={pathname.includes("/search") && true}>
                        검색
                    </ScLink>
                </Li>
            </Ul>
        </HeaderContainer>
    );
};

export default withRouter(Header);
