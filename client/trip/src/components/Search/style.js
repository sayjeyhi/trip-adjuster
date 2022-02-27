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
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fa9e51;
    position: absolute;
    top: 4px;
    right: 5px;
    g {
        stroke: white;
    }
`;