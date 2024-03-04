import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"
import { useState } from "react";

export default function RegisterPage() {
    const [newUser, setNewUser] = useState({email: "", senha: "", nome: "", foto: ""})
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    function createAccount (e) {
        e.preventDesafult()
    }

    return (
        <LoginContainer>
            <Link to={"/"}>
                <img src={logo} alt="logo TrackIt" />
            </Link>

            <Form onSubmit={createAccount}>
                <input placeholder="email" value={newUser.email} type="text" required/>
                <input placeholder="senha" value={newUser.senha} type="text" required />
                <input placeholder="nome" value={newUser.nome} type="text" required />
                <input placeholder="foto" value={newUser.foto} type="text" required />
                <button>Entrar</button>
            </Form>

            <p>Não tem conta? Cadastre-se!</p>
        </LoginContainer>
    )
};

const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 180px;
        height: 180px;
    }

    p {
        color: #52B6FF;
        text-decoration: underline;
        margin-top: 15px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        width: 300px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin: 5px 0;

        &::placeholder {
            font-size: 20px;
            padding: 5px;
        }
    }

    button {
        background-color: #52B6FF;
        color: white;
        width: 300px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin: 5px 0;
        font-size: 25px;
    }
`