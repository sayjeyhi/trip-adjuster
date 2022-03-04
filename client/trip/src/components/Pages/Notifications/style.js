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
  > h5 {
    padding-top: 20px;
  }
  .footer {
    width: 100%;
  }
  .header {
    margin: 40px 0 20px 0;
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