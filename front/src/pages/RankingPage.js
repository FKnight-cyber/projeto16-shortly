import { useContext, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/shortly.png';
import trophy from '../assets/trophy.jpg'
import Ranking from '../components/Ranking.js';
import UserContext from '../contexts/UserContext.js';

export default function RankingPage(){
    const navigate = useNavigate();
    const { token,setToken } = useContext(UserContext);

    useEffect(()=>{
        if(token===''){
            alert('Unauthorized!');
            navigate('/');
        }
    },[])

    return(
        <Container>
            <header>
                <h5 className='greetings'>Seja bem-vindo(a), Pessoa!</h5>
                <Link to="/" style={{textDecoration:"none"}}>
                    <h3>Home</h3>
                </Link>
                <h3>Ranking</h3>
                <Link onClick={()=>setToken('')} to="/" style={{textDecoration:"none"}}>
                    <h4>Sair</h4>
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
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

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
        position: relative;
        height: 58px;

        .greetings{
            position: absolute;
            font-weight: 400;
            font-size: 14px;
            left: 200px;
            color: #5D9040;
        }

        h3{
            font-size: 14px;
            color: #9C9C9C;
            margin-right: 30px;
        }

        h4{
            font-size: 14px;
            color: #9C9C9C;
            margin-right: 10px;
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
        width: 60%;
        height: 240px;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 50px;
        padding: 20px;
        overflow-y: scroll;
        color: #000000;
        font-weight: 500;
        font-size: 22px;
    }
`