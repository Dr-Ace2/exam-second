import './App.css';
import Home from './Component/Home';
import Users from './Component/Users';
import {Route, Routes} from 'react-router-dom';
import Error from './Component/Error';
import NotFound from './Component/NotFound';
import Pagination from './Component/Pagination';
import Repo from './Component/Repo';

function App() {
  return (
    <Error>
      <Routes>
          <Route path='*' element={<NotFound/>}/>
            <Route path='/' element={<Home />}>
            <Route path='users' element={<Users/>}/>
            <Route path='repo' element={<Repo/>}/>

          </Route> 
      </Routes> 
    </Error>
  );
}

export default App;
