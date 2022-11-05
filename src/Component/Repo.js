import {useEffect,useState} from "react";
import "./Styles/Repo.css";
import { Helmet } from "react-helmet-async";


const Repo=()=>{
         
    const getRepoName=()=>{
        return JSON.parse(localStorage.getItem('repoName'));
    }


    const [repo, setRepo]=useState([]);
    const [owner, setOwner] = useState([]);
  
  
    useEffect(() => {
      fetch(`https://api.github.com/repos/Dr-Ace2/${getRepoName()}`)
  
      .then(response => response.json())
      .then(data => {
         setRepo(data);
         console.log(data)
         setOwner(data.owner);
      });
  
    
    }, []);
  
         const{created_at , default_branch, full_name, id, visibility, language}= repo;
         const {avatar_url, login , url} = owner;

    return(
        
         <div className="card2">
            <Helmet>
                <title>Github repo app</title>
                <meta name="description" content="clicking on paginated repositories gives a single repository with additional information fetched from Github"/>
                <link rel="canonical" href="/repo"/>

            </Helmet>

            <h1> My Repository details</h1>
            <img src={avatar_url} alt="owner"/>
           <h1 className="username">Fullname: {full_name}</h1>
           <h1 className="username">Visiblity: {visibility}</h1>
           <h1 className="username">Created_at: {created_at}</h1>
           <h1 className="username">Language: {language}</h1>
           <p className="cardContent">Url: {url}</p> 
            <p className="cardContent">Login: {login}</p>
           <p className="cardContent">Id: {id}</p>
           <p className="cardContent">DefaultBranch: {default_branch}</p>
          
         </div>
       );
     

    
}

export default Repo;