import Styled from 'styled-components';

export const StyledProfileWrapper = Styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 100px 0 30px;
  height: 100vh;
  overflow: auto;
  scrollbar-width: none; 
  overflow-y: scroll; 
  ::-webkit-scrollbar {
      display: none;
  }
  .header {
    width: 100%;
  }
  .ant-avatar {
    margin-bottom: 30px;
  }
  .logout-button {
    color: #fa9e51 !important;
    border-color: #fa9e51 !important;
    margin: 30px auto;
    padding: 4px 24px;
    height: 45px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
      path {
        stroke: #fa9e51;
      }
    }
  }
`;

