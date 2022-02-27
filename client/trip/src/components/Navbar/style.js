import Styled from 'styled-components';

export const StyledNavbarWrapper = Styled.div`
  display: flex;
  margin: 20px;
  padding-bottom: 10px;
  overflow-x: scroll;
  padding-bottom: 20px;
  span {
    padding-right: 30px;
    color: #888;
    &.active {
      // border-bottom: 1px solid #fa9e51  ;
      color: #fa9e51;
      // width: 112px;
      // height: 47px;
      // border-bottom: 1px solid black;
      // &:before {
      // }
    }
    
  }
`;

