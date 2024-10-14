import bannerImage from '../../assets/banner.png';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Container, Title, TitleHighLight, TextContext } from './styles';

const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContext>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encara o seu novo 
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContext>
                <Button title="Começar agora" variant="secondary" onCLick={ () => null } />
            </div>
            <div>
                <img src={ bannerImage } alt="Imagem Principal" />
            </div>
        </Container>
    </>);
};

export { Home };