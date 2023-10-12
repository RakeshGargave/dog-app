import { Link } from 'react-router-dom';
import '../Navbar.css'

const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/History">History</Link>
          </li>
          <li>
             <Link to="/Cart">Cart</Link>
          </li>
       </ul>
 </nav>
 );
};

export default NavBar;