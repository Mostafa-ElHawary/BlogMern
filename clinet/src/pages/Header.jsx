import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        <Link to="/login">login</Link>
        <Link to="/register" className="Register">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
