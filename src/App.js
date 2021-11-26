import { Link } from "react-router-dom";
import './App.css';


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
    </div>
  );
}

export default App;
