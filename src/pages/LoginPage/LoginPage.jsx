import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function LoginPage({setToken}) {
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function login(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promise = axios.post(URL, form)
        promise.then((res) => {
            console.log(res.data)
            setToken(res.data.token)
            navigate("/habits")
        })
        promise.catch((err) => alert(err.response.data.message))
    }

    return (
        <LoginContainer>
            <img src={logo} alt="logo TrackIt" />

            <Form onSubmit={login}>
                <input placeholder="email" name="email" onChange={handleForm} value={form.email} type="email" required />
                <input placeholder="senha" name="password" onChange={handleForm} value={form.password} type="password" required />
                <button type="submit">Entrar</button>
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
