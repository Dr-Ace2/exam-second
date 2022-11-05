import { Link, Outlet } from "react-router-dom";
import './Styles/Home.css';
import { Helmet } from "react-helmet-async";
import UserCard from "./UserCard";

const Home = () => {
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

             </div>
             <Outlet/>
         </>
    )
}

export default Home;