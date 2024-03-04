import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <LoginContainer>
            <img src={logo} alt="logo TrackIt" />

            <Form onSubmit={""}>
                <input placeholder="email" required/>
                <input placeholder="senha" required/>
                <Link to={"/habits"}>
                    <button>Entrar</button>
                </Link>
            </Form>

            <Link to={"/register"}>
                <p>Não tem conta? Cadastre-se!</p>
            </Link>
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
