import { Link, Outlet } from "react-router-dom";
import './Styles/Home.css';
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Home = () => {

     const [error, setError]=useState(false);
     if (error) {throw Error("Something went wrong");}

     const getError =()=>{
        setError(true)
     }

    return(
         <>
         <Helmet>
            <title>Github repo app</title>
            <meta name="description" content="Home to the website of paginated repositories which is made up of different repositories fetched from Github"/>
            <link rel="canonical" href="/"/>

         </Helmet>

             <nav className="homebg">
                <Link to='/' className="link">Home</Link>
                <Link to='users' className="link">Users</Link>

             </nav>

             <div className="parentDiv">
                   <h1 className="users-heading"> Welcome to my Repository Search App</h1>
                   <p className="usersnav">Navigate to  <Link to='users' className="links">
                    
                    <span>  REPOS</span></Link> to view my repositories</p>
                    <button onClick={getError}>Test Error Boundary</button>
             </div>
             <Outlet/>
         </>
    )
}

export default Home;