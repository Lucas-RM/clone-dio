import React from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';

import { Container, Title, TitleHighLight, Column } from './styles';

const Feed =() => {
  return (<>
    <Header autenticado={ true } />
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column>
            <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
            <UserInfo percentual={ 80 } nome="Lucas Marcondes" image="https://avatars.githubusercontent.com/u/56799886?v=4" />
            <UserInfo percentual={ 27 } nome="Lucas Marcondes" image="https://avatars.githubusercontent.com/u/56799886?v=4" />
            <UserInfo percentual={ 89 } nome="Lucas Marcondes" image="https://avatars.githubusercontent.com/u/56799886?v=4" />
            <UserInfo percentual={ 57 } nome="Lucas Marcondes" image="https://avatars.githubusercontent.com/u/56799886?v=4" />
            <UserInfo percentual={ 12 } nome="Lucas Marcondes" image="https://avatars.githubusercontent.com/u/56799886?v=4" />
        </Column>
    </Container>
  </>);
};

export { Feed };