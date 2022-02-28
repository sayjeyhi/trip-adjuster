import Styled from 'styled-components';

export const StyledNavbarWrapper = Styled.div`
  display: flex;
  margin: 20px 0 10px 20px;
  padding-bottom: 10px;
  .ant-anchor-ink {
    height: 0;
  }
  .ant-anchor-link {
    padding-left: 0;
    padding-right: 30px !important;
    &.active {
      a {
        color: #fa9e51;
      }
    }
  }
  .ant-anchor {
    display: flex;
  }
`;

