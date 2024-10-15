import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Wrapper, Column, Row, Title, TitleLogin, SubTitleLogin, EsqueciText, CriarText } from './styles';

const schema = yup.object({
    email: yup.string().email("Esse e-mail não é válido").required("Campo obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    // const onSubmit = data => console.log(data);
    
    const handleClickSignIn = () => {
        navigate('/feed');
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={ handleSubmit(handleClickSignIn) }>
                        <Input 
                            name="email"
                            errorMessage={ errors?.email?.message }
                            control={ control }
                            placeholder="E-mail" 
                            type="email" 
                            leftIcon={ <MdEmail /> } 
                        />

                        <Input 
                            name="password"
                            errorMessage={ errors?.password?.message }
                            control={ control }
                            placeholder="Senha" 
                            type="password" 
                            leftIcon={ <MdLock /> }
                        />

                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>);
};

export { Login };