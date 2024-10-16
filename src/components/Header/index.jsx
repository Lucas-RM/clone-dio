import React from "react";
import logo from "../../assets/logo-dio.png";

import { Button } from "../Button";

import { Container, Row, Wrapper, BuscarInputContainer, Menu, MenuRight, UserPicture, Input } from "./styles";

const Header = ({ autenticado }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={ logo } alt="Logo da Dio" />
                    { autenticado ? (<>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null }
                </Row>
                <Row>
                    { autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/56799886?v=4" />
                    ) : (<>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };