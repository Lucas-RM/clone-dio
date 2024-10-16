import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { Container, Wrapper, Column, Row, Title, TitleSignUp, SubTitleSignUp, TermosDeUso, FazerLoginText } from './styles';

const schema = yup.object({
    name: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
    email: yup.string().email("Esse e-mail não é válido").required("Campo obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
}).required();

const SignUp = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData) => {
		try {
            const existingUser = await isUserRegistered(formData);

            if (existingUser.data.length > 0) {
                alert('Este e-mail já está em uso.');
                return;
            }

			const response = await api.post('/users', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            if (response.status === 201) {
                alert('Cadastro realizado com sucesso!');
                navigate('/feed');
            }
		} catch(error) {
			alert(`${error} Houve um erro, tente novamente.`);
		}
	};

    // Verifica se o usuário já existe
    const isUserRegistered = (userData) => { 
        return api.get("/users", {
			params: { email: userData.email },
		});
    };

    const handleLoginClick = (event) => {
        event.preventDefault();
        navigate('/login');
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
                    <TitleSignUp>Comece agora grátis</TitleSignUp>
                    <SubTitleSignUp>Faça seu conta e make the change._</SubTitleSignUp>
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <Input 
                            name="name"
                            errorMessage={ errors?.name?.message }
                            control={ control }
                            placeholder="Nome completo" 
                            type="text" 
                            leftIcon={ <MdPerson /> } 
                        />

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

                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <TermosDeUso>Ao clicar em "criar minha conta grátis", 
                            declaro que aceito as Políticas de 
                            Privacidade e os Termos de Uso da DIO.</TermosDeUso>                        
                    </Row>
                    <FazerLoginText>Já tenho conta. <a href='/signup' onClick={ handleLoginClick }>Fazer Login</a></FazerLoginText>
                </Wrapper>
            </Column>
        </Container>
    </>);
};

export { SignUp };