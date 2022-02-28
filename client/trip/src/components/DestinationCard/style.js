import Styled from 'styled-components';

export const StyledCardWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
  width: 230px;
`;

export const StyledCardImage = Styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
  .ant-image-mask {
    border-radius: 15px;
  }
  img {
    border-radius: 15px;
    height: 150px;
  }
`;

export const StyledCardDetails = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px 0;
`;

export const StyledCardTitle = Styled.div`
  h5 {
    text-align: left;
    margin-bottom: 0;
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
  background-color: #fff;
  border-radius: 7px;
  padding: 3px 7px;
  position: absolute;
  right: 10px;
  top: 10px;
  span {
    display: flex;
    align-items: center;
    color: #fa9e51;
  }
`;

