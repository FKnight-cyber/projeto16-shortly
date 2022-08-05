import { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/shortly.png';
import axios from 'axios';
import UserContext from '../contexts/UserContext.js';
import {Circles} from "react-loader-spinner";
import { toast,ToastContainer } from "react-toastify";

const notify = (error)=>{
    toast(`❗ ${error}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

export default function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState(false);

    const { setToken } = useContext(UserContext);

    function signIn(event){
        event.preventDefault();
        setLoad(true);

        const body = {
            email,
            password
        }

        const promise = axios.post('https://ryan-project-shortly.herokuapp.com/signin',body);

        promise.then((res)=>{
            localStorage.setItem('authToken', res.data);
            setToken(localStorage.getItem('authToken'));
            setLoad(false);
            navigate('/');
        })

        promise.catch(Error => {
            setLoad(false);
            notify(Error.response.data);
        })
    }

    return(
        <Container>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={true}
                limit={1}
            />
            <header>
                <h3>Entrar</h3>
                <Link to="/signup" style={{textDecoration:"none"}}>
                    <h4>Cadastrar-se</h4>
                </Link>
            </header>
            <div className='title'>
                <h1>Shortly</h1>
                <img src={logo} alt="shortly" srcset="" />
            </div>
            {
                load ?
                <Circles color={'#5D9040'} /> 
                :
                <form onSubmit={signIn}>
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
                <button type="submit">Entrar</button>
            </form>
            }
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

    @media only screen and (max-width: 768px) {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       position: relative;

       header{
        position: absolute;
        top: 0;
       }

       form{
        margin-top: 60px;
        width: 80%;

        button{
            margin-top: 30px;
        }
       }
    }   
`