import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: relative;
  background-color: aliceblue;
`;

const HeaderInner = styled.div`
  position: relative;
  width: 1100px;
  height: 60px;
  margin: 0 auto;
`;

const LogoArea = styled.div`
  position: absolute;
  height: 100%;
  background-color: #eee;

  h1 {
    position: absolute;
    top: 50%;
    margin-top: -10px;
  }
`;

const NavStyle = styled.nav`
  height: 60px;
  line-height: 60px;
  z-index: 100;

  ul {
    position: absolute;
    top: 0;
    right: 10px;
  }

  ul li {
    float: left;
  }

  ul li + li {
    padding-left: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderInner>
        <LogoArea>
          <h1>
            logo
          </h1>
        </LogoArea>
        <NavStyle>
          <ul>
            <li><a href='#'>회사소개</a></li>
            <li><a href='#'>사업소개</a></li>
            <li><a href='#'>공지사항</a></li>
            <li><a href='#'>보도자료</a></li>
            <li><a href='#'>배송지역검색</a></li>
          </ul>
        </NavStyle>
      </HeaderInner>
    </HeaderStyle>
  );
};

export default Header;