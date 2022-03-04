import Styled from 'styled-components';

export const StyledNavbarWrapper = Styled.div`
  display: flex;
  margin: 20px 0 10px 20px;
  padding-bottom: 10px;
  overflow: hidden;
  .swiper {
    height: 100%;
  }
  .swiper-slide {
    text-align: left;
    margin-right: 10px;
    height: 100%;
  }
  a {
    padding-left: 0;
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

