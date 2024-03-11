import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import logo from "../../assets/images/logo.png"

export default function RegisterPage() {
    const [newUser, setNewUser] = useState({email: "", password: "", name: "", image: ""})
    const navigate = useNavigate()

    function handleUser (e) {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    function createAccount(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

        const body = { email: newUser.email, name: newUser.name, image: newUser.image, password: newUser.password }

        const promise = axios.post(URL, body)
        promise.then((res) => {
            alert("Conta Criada com Sucesso!!")
            navigate("/")
        })
        promise.catch((err) => alert(err.response.data.message))
    }

    return (
        <LoginContainer>
                <img src={logo} alt="logo TrackIt" />

            <Form onSubmit={createAccount}>
                <input placeholder="email" name="email" value={newUser.email} onChange={handleUser} type="email" required />
                <input placeholder="password" name="password" value={newUser.password} onChange={handleUser} type="password" required />
                <input placeholder="name" name="name" value={newUser.name} onChange={handleUser} type="text" required />
                <input placeholder="foto" name="image" value={newUser.image} onChange={handleUser} type="text" required />
                <button type="submit">Cadastrar</button>
            </Form>

            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
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