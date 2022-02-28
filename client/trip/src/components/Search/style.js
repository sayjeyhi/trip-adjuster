import Styled from 'styled-components';

export const StyledSearchWrapper = Styled.div`
  margin: 30px 20px 0;
  position: relative;
  .search {
    border-radius: 30px;
    padding: 10px;
    ::placeholder {
        color: #9f9f9f; 
    }
  }
`;

export const StyledIconWrapper = Styled.div`
    button {
       background-color: #fa9e51;
       border-color: #fa9e51;
       display: flex;
       align-items: center;
       justify-content: center;
       position: absolute;
       top: 6px;
       right: 7px;
       &:hover {
        background-color: #fa9e51;
        border-color: #fa9e51;
       }
       &:active {
        background-color: #fa9e51 !important;
        border-color: #fa9e51 !important;
       }
       g {
           stroke: white;
       }
    }
`;