import Styled from 'styled-components';

export const StyledDestinationsWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 5px;
  overflow: auto;
  padding: 80px 0 0;
  height: 100vh;
  > h5 {
    padding-top: 20px;
  }
  .footer {
    width: 100%;
  }
  .header {
    padding: 0 20px !important;
    width: 100%;
    .ant-image {
      width: 100% !important;
      img {
        height: 80px;
        width: 80px;
      }
    }
    &:first-child {
      padding: 0;
    }
  }
`;

export const StyledNotificationsWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;  
  background-color: #fff;
  width: 93%;
  border-radius: 15px;
  ul {
    padding: 0 20px;
    li {
      font-size: 16px;
      list-style-type: none;
      color: #868686;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      span {
        margin-left: 30px;
        font-size: 12px;
        color: #b2b0b0;
      }
      h5 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        fill: #4bcf4d;
        margin-right: 10px;
      }
    }
  }
`;

export const StyledLoadingWrapper = Styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
`;