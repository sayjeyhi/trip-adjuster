import Styled from 'styled-components';

export const StyledCardWrapper = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
`;

export const StyledCardImage = Styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  position: relative;
  .ant-image-mask {
    border-radius: 15px;
  }
  img {
    border-radius: 10px;
    height: 80px;
  }
`;

export const StyledCardDetails = Styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  &.align {
    align-items: flex-start;
  }
`;

export const StyledCardTitle = Styled.div`
  h5 {
    text-align: left;
    margin-bottom: 0;
    margin-top: 0 !important;
  }
  span {
    display: flex;
    font-size: 12px;
    color: #bebebe;
    svg {
      margin-right: 5px;
    }
  }
  g {
    stroke: #bebebe;
  }
`;

export const StyledRateItem = Styled.div`
  display: flex;
  align-items: center;
  background-color: #fef0e6;
  height: 35px;
  border-radius: 10px;
  padding: 8px; 
  span {
    display: flex;
    align-items: center;
    color: #fa9e51;
    svg {
      margin-right: 5px;
      path {
        fill: #fa9e51 !important;
        stroke: #fa9e51;
      }
    }
  }
`;

export const StyledPriceItem = Styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  background-color: #fa9e51;
  border-radius: 7px;
  padding: 3px 7px;
  span {
    display: flex;
    align-items: center;
    color: #fff;
  }
`;

export const StyledIconWrapper = Styled.div`
  svg {
    path {
      fill: #fa9e51 !important;
      stroke: #fa9e51;
    }
  }
`;

