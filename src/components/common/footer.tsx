import styled from 'styled-components';

const FooterStyle = styled.footer`
  width: 100%;
  height: 100px;
  background-color: rgb(49, 53, 62);
  color: #D5D5D5FF;

  h3 {
    font-size: 1rem;
    color: red;
  }

  h3::after {

  }

  h3::before {
  }
`;
const FooterInner = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 1rem 0;

  ul {
    display: table-cell;
  }

  ul li {
  }
`;
const Footer = () => {
  return (
    <FooterStyle>
      <FooterInner>
        <div>
          <h3>Timf</h3>
          <ul>
            <li>상호명: (주)팀프레시</li>
            <li>사업자등록번호: 561-88-01138</li>
            <li> 대표자: 이성일</li>
          </ul>
        </div>
        <div>
          <h3>Contact us</h3>
          <ul>
            <li>Tel: 02-423-0525</li>
            <li>Fax: 02-3432-0525</li>
            <li>E-mail: info@timf.co.kr</li>
            <li>서울특별시 송파구 위례성대로 12길 15-1</li>
            <li>영업 및 제휴 문의 : E-mail: sales@timf.co.kr</li>
          </ul>
        </div>
        <div>
          <h3>Others</h3>
          <ul>
            <li>인재채용</li>
            <li>서비스 소개</li>
            <li>개인정보 처리방침</li>
            <li>위치기반 서비스 이용약관</li>
          </ul>
        </div>
      </FooterInner>
    </FooterStyle>
  );
};

export default Footer;