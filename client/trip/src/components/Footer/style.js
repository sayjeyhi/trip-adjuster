import Styled from 'styled-components';

export const StyledFooterWrapper = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  height: 65px;
  margin: 20px 0 0;
  border-radius: 0 0 2rem 2rem;
  .ant-anchor {
    display: flex;
  }
  .ant-anchor-wrapper {
    margin-left: 0;
  }
  .ant-anchor-ink {
    display: none;
  }
  .ant-anchor-link {
    padding: 0;
    width: 25%;
    svg {
      path {
        stroke: #bebebe;
      }
    }
    &.active {
      svg {
        path {
          fill: #fa9e51;
          stroke: #fff;
        }
      }
    }
  }
  .header-card {
    width: 100%;
  }
`;

