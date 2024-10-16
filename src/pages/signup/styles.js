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

    max-width: 374px;

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
    max-width: 372px;

`

export const Title = styled.h2`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    width: 388px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;

`

export const TitleSignUp = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 8px;
    line-height: 44px;

`

export const SubTitleSignUp = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

`

export const TermosDeUso = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;

`

export const FazerLoginText = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-top: 10px;
    
    a {
        color: #23DD7A;
        text-decoration: none;
        transition: all ease-in-out 0.2s;
    }

    a:hover {
        opacity: 0.7;
        cursor: pointer;
        text-decoration: underline;
    }

`