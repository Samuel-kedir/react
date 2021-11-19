import { Link } from "react-router-dom";
const Navbar = ({pageTitle}) => {
  return (
    <nav className="nav">
      <h1>{pageTitle}</h1>

      <ul className="navbar">
        <li>
          <Link to="/" >  home </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blogs">Blog</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>

      {/* inline style  */}
      {/* <a href="/" style={{background:'black', color: 'white'}}>Home</Link>  */}
    </nav>
  );
};

export default Navbar;
