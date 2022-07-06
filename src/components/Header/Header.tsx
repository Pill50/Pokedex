import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <header className="w-full">
          <img
            className="w-1/3 ml-auto mr-auto"
            src="http://tylerhawkins.info/pokedex-slash-graphql/build/static/media/pokemon-logo.9253c457.png"
            alt="header"
          />
        </header>
      </Link>
    </>
  );
};

export default Header;
