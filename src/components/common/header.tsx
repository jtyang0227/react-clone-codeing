import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: relative;
  background-color: #fff;
 
  .inner {
    width: 1130px;
    padding: 0 30px 92px;
    margin: 0 auto;
  }
  
  h1 {
    background-image: url("../styles/image/teamfresh_logo.png");
  }
`;

const NavStyle = styled.nav`
  height: 60px;
  position: fixed;
  z-index: 10;
  padding: 0.8rem !important;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className="inner">
        <h1>
          LOGO
        </h1>
        <NavStyle>
          <ul>
            <li>회사소개</li>
            <li>사업소개</li>
            <li>공지사항</li>
            <li>보도자료</li>
            <li>배송지역검색</li>
          </ul>
        </NavStyle>
      </div>
    </HeaderStyle>
  );
};

export default Header;