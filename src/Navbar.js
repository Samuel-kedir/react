const Navbar = () => {
    return ( 
        <nav className="nav">
                <h1>My Blogs</h1>

          <ul className="navbar">
              
                <li><a href="/home" className="active">home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/">Blog</a></li>

          </ul>
            
                {/* inline style  */}
                {/* <a href="/" style={{background:'black', color: 'white'}}>Home</a>  */}
                
          
        </nav>
     );
}
 
export default Navbar;