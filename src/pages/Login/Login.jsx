import { useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
    width: 316px;
    margin: auto;
    gap: 10px;
    box-shadow: 0 3px 3px rgb(0 0 0 / 0.12);
    padding: 30px;

    & > p {
        margin: 0;
        padding: 0;
    }
`

const Header = styled.h2`
    font-family: Roboto, sans-serif;
    font-size: 24px;
    padding: 0;
    margin: 0;
`

const Headline = styled.p`
    font-family: Roboto, sans-serif;
    font-size: 12px;
`

const FieldWrapper = styled.p`
    display: flex;
    flex-direction: column;
    gap: 5px;

    & > label {
        font-family: Roboto, sans-serif;
        font-size: 12px;
    }

    & > input {
        border-radius: 5px;
        border: 1px solid #000;
        height: 38px;
    }
`

const ForgotLink = styled.a`
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #7E1417;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const BtnAction = styled.button`
    width: 100%;
    height: 38px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 500;
    background-color: #7E1417;
    color: #FFF;
    border: none;
`

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Wrapper>
            <Header>Admin Sign In</Header>
            <Headline>Working United in the Community to Better Healthcare</Headline>
            <FieldWrapper>
                <label htmlFor="user_login">Email Address or Username</label>
                <input input="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FieldWrapper>
            <FieldWrapper>
                <label htmlFor="user_pass">Password</label>
                <input input="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FieldWrapper>
            <p>
                <ForgotLink href="#">Forgot Password?</ForgotLink>
            </p>
            <p>
                <BtnAction>Sign in</BtnAction>
            </p>
        </Wrapper>
    )
}

export default Login