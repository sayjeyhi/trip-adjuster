import Styled from 'styled-components';

export const StyledScheduleWrapper = Styled.div`
    background-color: #f8f8f8;
    border-radius: 20px;
    padding: 50px 0 0;
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