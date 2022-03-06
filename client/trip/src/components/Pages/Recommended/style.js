import Styled from 'styled-components';

export const StyledRecommendedWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 5px;
  overflow: auto;
  padding-bottom: 70px;
  padding-top: 80px;
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
  .recommended-card {
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

export const StyledContentWrapper = Styled.div`
  padding: 0 20px;
  width: 100%;
`;