import Styled from 'styled-components';

export const StyledScheduleWrapper = Styled.div`
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: 70px 0 60px;
    height: 100vh;
    overflow: auto;
    scrollbar-width: none; 
    overflow-y: scroll; 
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledDatePickerWrapper = Styled.div`
    display: flex;
    margin: 20px;
    > div {
        width: 100%;
        button {
            box-shadow: none;
            &.sdp--date-btn__selected {
                background-color: #fa9e51;
            }
        }
    }
`;

export const StyledRecommentCardWrapper = Styled.div`
    
`;

export const StyledIconWrapper = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 42px;
    border-radius: 10px;
    background-color: #fef1e6;
`;