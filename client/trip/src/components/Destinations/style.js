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
  .destination-card {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
    padding: 10px !important;
    .ant-image {
      width: 100% !important;
      img {
        height: auto;
      }
    }
    &:first-child {
      padding: 0;
    }
  }
`; 

export const StyledContentWrapper = Styled.div`
    padding: 0 20px;
`;

