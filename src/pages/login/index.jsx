import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { Container, Wrapper, Column, Row, Title, TitleLogin, SubTitleLogin, EsqueciText, CriarLink } from './styles';

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

    const onSubmit = async (formData) => {
		try {
			const response = await api.get('/users', {
                params: {
                    email: formData.email,
                    password: formData.password
                }
            });

            if (response.data.length > 0) {
                alert('Login realizado com sucesso!');
                navigate('/feed');
            } else {
                alert('Falha no login. Verifique suas credenciais.');
            }
		} catch {
			alert("Houve um erro, tente novamente.");
		}
	};

    const handleSignUpClick = (event) => {
        event.preventDefault();
        navigate('/signup');
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
                    <form onSubmit={ handleSubmit(onSubmit) }>
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
                        <CriarLink hrefLang="/signup" onClick={ handleSignUpClick }>Criar Conta</CriarLink>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>);
};

export { Login };