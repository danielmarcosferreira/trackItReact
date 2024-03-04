import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function createAccount(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

        const body = { email, name, image, password }

        const promise = axios.post(URL, body)
        promise.then((res) => {
            console.log(res.data)
            navigate("/")
        })
        promise.catch((err) => console.log(err.response.data))
    }

    return (
        <LoginContainer>
            <Link to={"/"}>
                <img src={logo} alt="logo TrackIt" />
            </Link>

            <Form onSubmit={createAccount}>
                <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} type="text" required />
                <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} type="password" required />
                <input placeholder="name" value={name} onChange={e => setName(e.target.value)} type="text" required />
                <input placeholder="foto" value={image} onChange={e => setImage(e.target.value)} type="text" required />
                <button type="submit">Cadastrar</button>
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