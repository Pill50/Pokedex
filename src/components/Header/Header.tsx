import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <header className="w-full">
          <img
            className="w-1/3 ml-auto mr-auto"
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/07/pokemon-gotta-catch-em-all-slogan.jpg"
            alt="header"
          />
        </header>
      </Link>
    </>
  );
};

export default Header;
