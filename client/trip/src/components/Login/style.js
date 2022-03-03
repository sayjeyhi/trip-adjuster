import Styled from 'styled-components';

export const StyledLoginWrapper = Styled.div`
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 50px 0 30px;
  height: 100vh;
  .header {
    width: 100%;
  }
`;

export const StyledFormWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  input {
    margin-bottom: 10px;
    border-radius: 25px;
    height: 40px;
  }
  span {
    margin-bottom: 10px;
    border-radius: 25px;
    height: 40px;
  }
  button {
    margin-top: 20px;
    background-color: #fa9e51;
    border-color: #fa9e51;
    box-shadow: none;
    height: 45px;
    &:hover {
      background-color: #fa9e51;
      border-color: #fa9e51;
    }
    &:active {
      background-color: #fa9e51;
      border-color: #fa9e51;
    }
    &:focus {
      background-color: #fa9e51;
      border-color: #fa9e51;
    }
  }
`;

