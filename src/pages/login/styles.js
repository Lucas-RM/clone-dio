import styled from "styled-components";

export const Container = styled.main`

    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

`

export const Wrapper = styled.div`

    max-width: 370px;

    form button {
        max-width: 275px;
    }

`

export const Column = styled.div`

    flex: 1;

`

export const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    max-width: 275px;

`

export const Title = styled.h2`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    min-width: 565px;
    max-width: 90%;
    margin-right: 100px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;

`

export const TitleLogin = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 8px;
    line-height: 44px;

`

export const SubTitleLogin = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

`

export const EsqueciText = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #E5E044;

`

export const CriarLink = styled.a`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #23DD7A;
    text-decoration: none;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
        text-decoration: underline;
    }

`