import React, {useState, useEffect } from 'react';
import UserCard from "./UserCard";
import Empty from "./Empty";
import Pagination from './Pagination';
import { Helmet } from 'react-helmet-async';
import "../Component/Styles/Users.css"
// const style ={
//     color:"yellow",
// }


const url = "https://api.github.com/users/Dr-Ace2/repos";

  const Users=()=> {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(url)

    .then(response => response.json())
    .then(data => {
      console.log(data);
       setUsers(data);
    });

  
  }, []);



  return (


    <div className="users">
      
      <Helmet>
          <title>Github repo app</title>
          <meta name="description" content="get the name,full_name, ID, url,default_branch of my paginated repositories"/>
          <link rel="canonical" href='/users'/>
      </Helmet>

    {users.length > 0 ? (
      <div  className='repo-container'>
        <Pagination
          data={users}
          RenderComponent= {UserCard}
          title="My Repositories"
          pageLimit={5}
          dataLimit={6}
        />
      </div>
    ) : (
     <Empty/>
     )} 
  </div>
)

}
export default Users