import Styled from 'styled-components';

export const StyledLoginWrapper = Styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
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
    height: 50px;
  }
  > span {
    margin-bottom: 10px;
    border-radius: 25px;
    height: 50px;
    display: flex;
    align-items: center;
    input {
      height:40px;
      margin: 0;
    }
    span {
      margin: 0;
    }
  }
  button {
    margin-top: 20px;
    background-color: #fa9e51;
    border-color: #fa9e51;
    box-shadow: none;
    height: 50px;
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

export const StyledErrorWrapper = Styled.div`
  span {
    color: #d10e0e;
    display: inline-block;
    width: 100%;
    padding-top: 30px;
  }
`;

