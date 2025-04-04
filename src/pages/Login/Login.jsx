import { useState } from "react";
import { styled } from "styled-components";
import { EyeOff, Eye } from "lucide-react";

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

    & input {
        border-radius: 5px;
        border: 1px solid #000;
        height: 38px;
        padding-left: 10px;
        padding-right: 10px;
        width: -webkit-fill-available;
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
    cursor: pointer;
`

const PasswordWrapper = styled.div`
    position: relative;
`

const PasswordVisibility = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #7E1417;
    outline: none;

    &:active {
        border: none;
        color: #FFF;
    }
`

const ErrorBox = styled.div`
    background-color: #ffe6e6;
    color: #7E1417;
    border: 1px solid #7E1417;
    border-radius: 5px;
    padding: 10px;
    font-size: 12px;
    font-family: Roboto, sans-serif;
`;

const currentUrl = `${window.location.protocol}//${window.location.host}`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${currentUrl}/wp-json/hmg/v1/login/admin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            const data = await response.json();
            
            if (data.code === 'authentication_failed') {
                setError(data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return (
        <Wrapper>
            <Header>Admin Sign In</Header>
            <Headline>Working United in the Community to Better Healthcare</Headline>
            {error && <ErrorBox>{error}</ErrorBox>}
            <FieldWrapper>
                <label htmlFor="user_login">Email Address or Username</label>
                <input type="mail" name="user_login" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FieldWrapper>
            <FieldWrapper>
                <label htmlFor="user_pass">Password</label>
                <PasswordWrapper>
                    <input type={showPassword ? "text" : "password"} name="user_pass" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <PasswordVisibility 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </PasswordVisibility>
                </PasswordWrapper>
                
            </FieldWrapper>
            <p>
                <ForgotLink href="#">Forgot Password?</ForgotLink>
            </p>
            <p>
                <BtnAction onClick={handleSubmit}>Sign in</BtnAction>
            </p>
        </Wrapper>
    )
}

export default Login