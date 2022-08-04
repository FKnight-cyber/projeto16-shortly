import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/shortly.png';
import trophy from '../assets/trophy.jpg'
import Ranking from '../components/Ranking.js';
import UserContext from '../contexts/UserContext.js';
import Links from '../components/Links.js';
import axios from 'axios';

export default function InitialPage(){
    const { token,setToken } = useContext(UserContext);
    const [links,setLinks] = useState({shortenedUrls:[]});
    const [url,setUrl] = useState('');
    const [render,setRender] = useState(0);

    useEffect(()=>{
        if(token){
            const promise = axios.get('https://ryan-project-shortly.herokuapp.com/users/me',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            promise.then(res=>{
                setLinks(res.data);
            });

            promise.catch(Error=>{
                alert(Error.response.data);
            });
            }
        },[url,render]);

    function shortenLink(event){
        event.preventDefault();

        const body = {
            url
        }

        const promise = axios.post('https://ryan-project-shortly.herokuapp.com/urls/shorten',body,{
            headers:{
                Authorization: `Bearer ${token}`
            }
         });

         promise.then(()=>{
            setUrl('')
            alert('OK');
         });

         promise.catch(Error=>{
            alert(Error.response.data);
         })
    }

    return(
        <Container token={token}>
            {
                token === '' ?
                <>
                    <header>
                    <Link to="/signin" style={{textDecoration:"none"}}>
                        <h3>Entrar</h3>
                    </Link>
                    <Link to="/signup" style={{textDecoration:"none"}}>
                        <h4>Cadastrar-se</h4>
                    </Link>
                    </header>
                    <div className='title'>
                        <h1>Shortly</h1>
                        <img src={logo} alt="shortly" srcset="" />
                    </div>
                    <div className='ranking'>
                        <img src={trophy} alt="trophy" srcset="" />
                        <h2>Ranking</h2>
                    </div>
                    <div className='rankingContainer'>
                        <Ranking />
                    </div>
                    <Link to="/signup" style={{textDecoration:"none"}}>
                        <h1 className='criar'>Crie sua conta para usar nosso serviço!</h1>
                    </Link>
                </>
                :
                <>
                    <header>
                        <h5 className='greetings'>Seja bem-vindo(a), Pessoa!</h5>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <h3>Home</h3>
                        </Link>
                        <Link to="/ranking" style={{textDecoration:"none"}}>
                            <h3>Ranking</h3>
                        </Link>
                        <Link onClick={()=>setToken('')} to="/" style={{textDecoration:"none"}}>
                            <h4>Sair</h4>
                        </Link>
                    </header>
                    <div className='title'>
                        <h1>Shortly</h1>
                        <img src={logo} alt="shortly" srcset="" />
                    </div>
                    <form onSubmit={shortenLink}>
                        <input type="text"
                        placeholder="Links que cabem no bolso"
                        value={url}
                        onChange={(e)=>setUrl(e.target.value)}
                        required />
                        <button type="submit">Encurtar link</button>
                    </form>
                    <div className='linkContainer'>
                        <Links links={links} setRender={setRender} />
                    </div>
                </> 
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    .linkContainer{
        margin-top: 40px;
        height: 400px;
        overflow-y: scroll;
    }

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:100px;

        input{
            width: 60%;
            height: 60px;
            border-radius: 12px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            padding-left: 14px;
            margin-right: 60px;
        }

        button{
            height: 60px;
            width: 18%;
            border-radius: 12px;
            border: none;
            background-color: #5D9040;
            color: #FFFFFF;
            font-size: 20px;

            &:hover{
                cursor: pointer;
            }
        }
    }

    .criar{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
        color: #000000;
        font-weight: 700;
        font-size: 36px;
    }

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
            color: ${props=>props.token === '' ? '#5D9040' : '#9C9C9C'};
            margin-right: 30px;
        }

        h4{
            font-size: 14px;
            color: #9C9C9C;
            text-decoration: ${props => props.token === '' ? 'none' : 'underline'};
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

    .ranking{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;

        h2{
            font-size: 36px;
            font-weight: 700;
        }

        img{
            width: 110px;
            height: 100px;
        }
    }

    .rankingContainer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        height: 240px;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 50px;
        padding: 20px;
        overflow-y: scroll;
        color: #000000;
        font-weight: 500;
        font-size: 22px;
    }
`