import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/shortly.png';
import axios from 'axios';

export default function Register(){
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    function signUp(event){
        event.preventDefault();
        
        const body = {
            name,
            email,
            password,
            confirmPassword
        }

        const promise = axios.post('https://ryan-project-shortly.herokuapp.com/signup',body);

        promise.then(()=>{
            navigate('/signin');
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        });
    }

    return(
        <Container>
            <header>
                <Link to="/signin" style={{textDecoration:"none"}}>
                    <h3>Entrar</h3>
                </Link>
                <h4>Cadastrar-se</h4>
            </header>
            <div className='title'>
                <h1>Shortly</h1>
                <img src={logo} alt="shortly" srcset="" />
            </div>
            <form onSubmit={signUp}>
                <input type="text"
                value={name}
                placeholder="Nome"
                onChange={(e)=>setName(e.target.value)}
                required />
                <input type="email"
                value={email}
                placeholder="E-mail"
                onChange={(e)=>setEmail(e.target.value)}
                required />
                <input type="password"
                value={password}
                placeholder="Senha"
                onChange={(e)=>setPassword(e.target.value)}
                required />
                <input type="password"
                value={confirmPassword}
                placeholder="Confirmar senha"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required />
                <button type="submit">Criar Conta</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    header{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 58px;

        h3{
            font-size: 14px;
            color: #9C9C9C;
            margin-right: 30px;
        }

        h4{
            font-size: 14px;  
            color: #5D9040;
        }
    }

    .title{
        display: flex;
        justify-content: center;

        h1{
            font-size: 64px;
            font-weight: 200;
        }
        img{
            width: 102px;
            height: 110px;
            transform: translateY(-1em);
        }
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 130px;

        input{
            width: 80%;
            height: 60px;
            margin-bottom: 26px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            border-radius: 12px;
            padding-left: 14px;
            color: #9C9C9C;
        }

        button{
            margin-top: 62px;
            width: 200px;
            height: 60px;
            background-color: #5D9040;
            border-radius: 12px;
            border: none;
            color: #FFFFFF;

            &:hover{
                cursor: pointer;
            }
        }
    }
`