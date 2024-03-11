import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import logo from "../../assets/images/logo.png"
import gif from "../../assets/images/loading.gif"
import { AuthContext } from "../../context/AuthProvider"

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const  {setToken, setImage} = useContext(AuthContext)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function login(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promise = axios.post(URL, form)
        setLoading(true)
        promise.then((res) => {
            setToken(res.data.token)
            setImage(res.data.image)
            setLoading(false)
            navigate("/habits")
        })
        promise.catch((err) => {
            setLoading(false)
            alert("Email ou senha inválidos")
        })
    }

    return (
        <LoginContainer>
            <img src={logo} alt="logo TrackIt" />

            <Form onSubmit={login}>
                <input
                    placeholder="email"
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                    type="email"
                    disabled={loading}
                    required />
                <input
                    placeholder="senha"
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    type="password"
                    disabled={loading}
                    required />

                <button type="submit">
                    {loading === false ? "Enter" : <img src={gif} />}
                </button>
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

        img {
            width: 50px;
            height: 45px;
        }
    }
`