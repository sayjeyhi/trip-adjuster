import Styled from 'styled-components';

export const StyledNavbarWrapper = Styled.div`
  display: flex;
  margin: 20px 0 10px 20px;
  padding-bottom: 10px;
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-width: none; 
  ::-webkit-scrollbar {
      display: none;
  }
  a {
    padding-left: 0;
    font-size: 14px;
    color: #bebebe;
    margin-right: 30px;
    position: relative;
    &.highlight {
      color: #fa9e51;
      &::after {
        content:'';
        position: absolute;
        background-color: #fa9e51;
        width: 50%;
        height: 2px;
        bottom: -4px;
        left: 0;
      }
    }
  }
`;

