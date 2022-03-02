import Styled from 'styled-components';

export const StyledNavbarWrapper = Styled.div`
  display: flex;
  margin: 20px 0 10px 20px;
  padding-bottom: 10px;
  overflow: hidden;
  .swiper-slide {
    text-align: left;
    margin-right: 10px;
  }
  a {
    padding-left: 0;
    margin-right: 10px;
    color: #bebebe;
    &.highlight {
      color: #fa9e51;
      &::after {
        content:'';
        position: absolute;
        background-color: #fa9e51;
        width: 30%;
        height: 2px;
        bottom: 0px;
        left: 0;
      }
    }
  }
`;

