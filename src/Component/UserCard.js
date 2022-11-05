import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Component/Styles/UserCard.css";

const UserCard = (props) => {


         
        const { url, full_name, id, name, default_branch } = props.data;
       
        const getRepoName=()=>{
            return JSON.parse(localStorage.getItem('repoName'));
        }
    
        const [repoName] =useState(()=>getRepoName());
         
        useEffect(()=>{

            localStorage.setItem('repoName', JSON.stringify(repoName));

        }, [repoName]);

        const getProp =(prop)=>{
            localStorage.setItem('repoName', JSON.stringify(prop))
        }


        return (
          <div className="card" onClick={getProp(name)}>
            <Link to="/repo">
            <h1 className="username">Fullname: {full_name}</h1>
            <p className="cardContent">Url: {url}</p>
            <p className="cardContent">Name: {name}</p>
            <p className="cardContent">Id: {id}</p>
            <p className="cardContent">DefaultBranch: {default_branch}</p>
            </Link>
          </div>
        );
      }
      


export default UserCard;