import styled from 'styled-components';

export const Container = styled.div`
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
            margin-right: 20px;
            margin-left: 10px;
        }

        h4{
            font-size: 14px;
            color: #5D9040;
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

    @media only screen and (max-width: 768px) {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       position: relative;

       .title{
        position: absolute;
        top:100px;
       }

       header{
        position: absolute;
        top: 0;

        .greetings{
            top:200px;
            width: 200px;
            left: 0;
            margin: 0;
        }
       }

       form{
        flex-direction: column;
        input{
            width: 380px;
            margin-right: 0;
        }

        button{
            width: 130px;
            margin-top: 10px;
        }
       }

       .linkContainer{
            height: 400px;
            width: 80%;
        }

        .ranking{
            margin-top: 100px;
        }

        .rankingContainer{
            margin-top: 30px;
        }
    }
`