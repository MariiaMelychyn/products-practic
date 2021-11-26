import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import {Home} from './pages/Home';
import {Login } from "./pages/Login";
import {Register} from './pages/Register';
import {PrivateRoute} from './routes/PrivateRoute';
import {PublicRoute} from './routes/PublicRoute';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav>
         <ul>
           <li>
            <Link to="/">Home</Link>
           </li>
           <li>
            <Link to="/login">Login</Link>
           </li>
           <li>
            <Link to="/register">Register</Link>
           </li>
           
         </ul>
       </nav>
      </header>
      <main>
        {/*Switch=> Router
        exaact=> -
        component => element*/}
        <Routes>
<Route path="/" element={<PrivateRoute/>}/>
<Route path="/login" element={<PublicRoute/>}/>
<Route path="/register" element={<PublicRoute/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
