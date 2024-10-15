import styled from "styled-components";

export const InputContainer = styled.div`

    width: 100%;
    max-width: 275px;
    height: 34px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: ${({errorMessage}) => errorMessage === undefined ? '20px' : '0'};

`

export const IconContainer = styled.div`

    margin-right: 10px;

`

export const InputText = styled.input`

    background-color: transparent;
    color: #FFFFFF;
    width: 100%;
    border: 0;
    height: 30px;

`

export const ErrorText = styled.p`

    color: #FF002B;
    font-size: 12px;
    margin: 10px 0 20px;

`