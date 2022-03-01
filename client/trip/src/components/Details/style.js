import Styled from 'styled-components';

export const StyledDetailsWrapper = Styled.div`
    background-color: #fcfcfc;
    border-radius: 20px;
    padding: 8px;
`;  

export const StyledCardImage = Styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
  .ant-image-mask {
    border-radius: 20px;
  }
  img {
    border-radius: 20px;
  }
`;

export const StyledCardWrapper = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  margin-top: -30px;    
`;

export const StyledCardDetails = Styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  padding-left: 10px;
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
  flex-direction: column;  
  align-items: center;
  background-color: #fa9e51;
  border-radius: 7px;
  padding: 3px 7px;
  span {
    display: flex;
    align-items: center;
    color: #fff;
  }
  svg {
      margin-right: 5px;   
      path {
          fill: #fff;
          stroke: #fff;
      }
  }
`;

export const StyledContentWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px; 
  span {
      text-align: left;
      font-size: 12px; 
      color: #bababa;
  }
  
`;