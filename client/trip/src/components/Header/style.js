import Styled from 'styled-components';

export const StyledHeaderWrapper = Styled.div`
    display: flex;
    padding: 0 20px;
`;

export const StyledProfilePic = Styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    overflow: hidden;
    img {
        margin-left: -17px;
        width: 70px;
    }
`;

export const StyledUserName = Styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    margin-left: 10px;
    &.flexGrow {
        flex-grow: 1;
        align-items: center;
    }
    h4 {
        margin-top: 0 !important;
        margin-bottom: 0;
        font-size: 16px;
    }
    h5 {
        margin: 0;
        font-size: 12px;
        color: #858585;
    }
`;

export const StyledNotification = Styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &.flexGrow {  
        flex-grow: 1;
    }  
`;

export const StyledIconWrapper = Styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fef7f0;
`;