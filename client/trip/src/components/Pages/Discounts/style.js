import Styled from 'styled-components';

export const StyledDiscountsWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 5px;
  overflow: auto;
  padding: 85px 0 70px;
  height: 100vh;
  scrollbar-width: none; 
  overflow-y: scroll; 
  ::-webkit-scrollbar {
      display: none;
  }
  .header {
    padding: 0 20px !important;
    width: 100%;
  }
  .footer {
    width: 100%;
  }
  .discount-card {
    margin: 0 0 20px;
    width: 100%;
    .ant-image {
      width: 100% !important;
      img {
        height: 80px;
        width: 80px;
      }
    }
  }
`;

export const StyledDiscountsCard = Styled.div`
  width: 93%;
  margin: 0 20px;
`;

export const StyledLoadingWrapper = Styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
`;