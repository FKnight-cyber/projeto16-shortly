import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext.js";
import { IoTrash } from "react-icons/io5";
import { toast } from "react-toastify";
import {FallingLines} from "react-loader-spinner";

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

const notify2 = (msg)=>{
    toast(`✅ ${msg}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

export default function Links({links,setRender}){
    const { token } = useContext(UserContext);
    const [load,setLoad] = useState([...links.shortenedUrls.map(a => false)]);
    

        function deleteUrl(id,index){
            let loader = [...load];
            loader[index] = true;
            setLoad([...loader]);

            const promise = axios.delete(`https://ryan-project-shortly.herokuapp.com/urls/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
             });

             promise.then(()=>{
                loader[index] = false;
                setLoad([...loader]);
                setRender(Math.random());
                notify2('Url Deleted');
             });

             promise.catch(Error=>{
                loader[index] = false;
                setLoad([...loader]);
                notify(Error.response.data);
             });
        };

        function goToUrl(shortUrl){
            const promise = axios.get(`https://ryan-project-shortly.herokuapp.com/urls/open/${shortUrl}`);

        
            promise.then((res)=>{
                window.location.href = res.data.split('to ')[1];
            })

            promise.catch(Error=>{
                notify(Error.response.data);
            })
        };

    return(
        links.shortenedUrls.map((item,index) => 
        <Container key={index}>
            <div>
                <a href={item.url}>
                    <h6>{item.url.substring(0,30) + '...'}</h6>
                </a>
                <h6 onClick={()=>goToUrl(item.shortUrl)}>{item.shortUrl}</h6>
                <h5>Quantidade de visitantes: {item.visitCount}</h5>
            </div>
            {
                load[index] ?
                <Spinner>
                    <FallingLines visible={'true'} color={'crimson'} width={50} />
                </Spinner> 
                :
                <button onClick={()=>deleteUrl(item.id,index)}>
                    <IoTrash color="crimson" size={30} />    
                </button>
            }
        </Container>
        )
    )
}

const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff !important;
    width: 20% !important;

    @media only screen and (max-width: 924px){
        padding-top: 20px !important;
    }
`

const Container = styled.div`
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
            margin-left: 10px;
        }

        h6{
           &:hover{
            cursor: pointer;
           }
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 0px 12px 12px 0px;
        border: none;

        &:hover{
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 924px){
        margin-bottom: 80px;
        
        div{
            flex-direction: column;
            height: 100px;
            padding: 4px 10px;
        }

        button{
            height: 100px;
        }

        h5{
            font-size: 14px;
        }
    }
`