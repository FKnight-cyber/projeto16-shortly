import { Link, useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/shortly.png';
import axios from 'axios';
import UserContext from '../contexts/UserContext.js';

export default function UrlPage(){
    const [link,setLink] = useState('');
    const {id} = useParams();
    const { token,setToken } = useContext(UserContext);

    useEffect(()=>{
        const promise = axios.get(`https://ryan-project-shortly.herokuapp.com/urls/${id}`);

        promise.then(res=>{
            console.log(res.data)
            setLink(res.data);
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        });
        },[]);

        function logOut(){
            localStorage.setItem('authToken', '');
            setToken(localStorage.getItem('authToken'));
        }

    return(
        <Container>
            {
                token === '' ?
                <header>
                    <Link to="/signin" style={{textDecoration:"none"}}>
                        <h3>Entrar</h3>
                    </Link>
                    <Link to="/signup" style={{textDecoration:"none"}}>
                        <h4>Cadastrar-se</h4>
                    </Link>
                </header>
                :
                <header>
                    <h5 className='greetings'>Seja bem-vindo(a), Pessoa!</h5>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <h3>Home</h3>
                    </Link>
                    <Link to="/ranking" style={{textDecoration:"none"}}>
                        <h3>Ranking</h3>
                    </Link>
                    <Link onClick={logOut} to="/" style={{textDecoration:"none"}}>
                        <h4>Sair</h4>
                    </Link>
                </header>
            }
            <div className='title'>
                <h1>Shortly</h1>
                <img src={logo} alt="shortly" srcset="" />
            </div>
            <URL>
                <div>
                    <a href={link.url}>
                        <h6>
                            {
                                link === '' ? '' : link.url.substring(0,50)+'...'
                            }
                        </h6>
                    </a>
                    <h6>{link.shortUrl}</h6>
                </div>
            </URL>
        </Container>
    )
}

const URL = styled.div`
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    height: 60px;
    margin-top: 40px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: 20px;
        padding-right: 40px;
        background-color: #80CC74;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px 0px 0px 12px;
        color: #FFFFFF;

        a{
            color: #ffffff;
        }

        h6{
           &:hover{
            cursor: pointer;
           }
        }
    }
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    header{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 58px;
        position: relative;

        .greetings{
            position: absolute;
            font-weight: 400;
            font-size: 14px;
            left: 200px;
            color: #5D9040;
        }

        h3{
            font-size: 14px;
            color: #5D9040;
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
`