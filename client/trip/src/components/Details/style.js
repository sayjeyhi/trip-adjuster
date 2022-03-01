import Styled from 'styled-components';

export const StyledDetailsWrapper = Styled.div`
    background-color: #f8f8f8;
    border-radius: 20px;
`;  

export const StyledCardImage = Styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
  padding: 8px;
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

export const StyledFooterPriceItem = Styled.div`
  display: flex; 
  align-items: flex-start; 
  flex-direction: column; 
  > span {
      font-size: 10px;
      color: #ccc;
  }
  h5 {
      margin: 0 !important;
      span {
        font-size: 10px;
        margin-left: 5px;
        color: #fa9e51;
        &:first-child {
            margin-right: 5px;  
        }
      }
  }
//   span {
//     display: flex;
//     align-items: center;
//     color: #fff;
//   }
  svg {
      margin-right: 5px;   
      path {
          fill: #fff;
          stroke: #fff;
      }
  }
`;

export const StyledButton = Styled.div`
  button {
      border-radius: 10px;  
      background-color: #fa9e51;
      border-color: #fa9e51;
      &:hover {
        background-color: #fa9e51;
        border-color: #fa9e51;
      }
      &:focus {
        background-color: #fa9e51;
        border-color: #fa9e51;
      }
  }
`;

export const StyledHeaderWrapper = Styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 30px;
  h4 {
      color: #fff;
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
  .more {
      color: #fa9e51;
      &:hover {
          color: #fa9e51;
      }
  }
`;

export const StyledFooterWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: #fff;
  height: 65px;
  margin: 20px 0 0;
  padding: 0 20px;
  border-radius: 0 0 20px 20px;
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