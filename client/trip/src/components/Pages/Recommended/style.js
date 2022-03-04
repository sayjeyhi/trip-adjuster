import Styled from 'styled-components';

export const StyledDestinationsWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 20px;
  margin-bottom: 20px;
  overflow: auto;
  padding: 0;
  .header {
    margin: 40px 0 20px 0;
    padding: 0 20px !important;
    width: 100%;
  }
  .footer {
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