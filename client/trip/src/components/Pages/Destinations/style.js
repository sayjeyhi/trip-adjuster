import Styled from 'styled-components';

export const StyledDestinationsWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 5px;
  overflow: auto;
  padding: 85px 0 80px;
  overflow: auto;
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
  .destination-card {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
    padding: 10px !important;
    a { 
      width: 100%;
      .ant-image {
        width: 100% !important;
        img {
          height: auto;
        }
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

export const StyledLoadingWrapper = Styled.div`
  
`;

