import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext.js";
import { IoTrash } from "react-icons/io5";

export default function Links({links,setRender}){
    const { token } = useContext(UserContext);

        function deleteUrl(id){
            const promise = axios.delete(`https://ryan-project-shortly.herokuapp.com/urls/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
             });

             promise.then(()=>{
                setRender(Math.random());
                alert('Ok');
             });

             promise.catch(Error=>{
                alert(Error.response.data);
             })
        }

    return(
        links.shortenedUrls.map((item,index) => 
        <Container key={index}>
            <div>
                <a href={item.url}>
                    <h6>{item.url.substring(0,30) + '...'}</h6>
                </a>
                <h6>{item.shortUrl}</h6>
                <h6>Quantidade de visitantes: {item.visitCount}</h6>
            </div>
            <button onClick={()=>deleteUrl(item.id)}>
                <IoTrash color="crimson" size={30} />
            </button>
        </Container>
        )
    )
}

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
        }
    }

    button{
        width: 14%;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 0px 12px 12px 0px;
        border: none;
    }
`