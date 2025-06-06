import { useSpring, animated } from "react-spring";
import twitter from "../assets/Social-Icons/twitter.png";
import linkedin from "../assets/Social-Icons/linkedin.png";
import github from "../assets/Social-Icons/github.png";
import facebook from "../assets/Social-Icons/facebook.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.footer
      style={fade}
      className="mt-10 footer footer-center bg-gray-800 text-white p-4"
    >
      <div className="container mx-auto text-center">
        <aside className="mb-4">
          <p>Made with ❤️ by Protap Biswas</p>
          <p>&copy; {new Date().getFullYear()} Protap Biswas</p>
        </aside>
        <div className="flex justify-center space-x-4">
          <Link to="https://www.facebook.com/protap.biswas1100">
            <img className="h-8 w-8" src={facebook} alt="" />{" "}
          </Link>
          <Link to="https://www.linkedin.com/in/protap-biswas1100/">
            <img
              className="h-8 w-8 hover:bg-transparent"
              src={linkedin}
              alt=""
            />{" "}
          </Link>
          <Link to="https://github.com/protap1100">
            <img className="h-8 w-8 hover:bg-transparent" src={github} alt="" />{" "}
          </Link>
          <Link to="https://twitter.com/protapb110">
            <img
              className="h-8 w-8 hover:bg-transparent"
              src={twitter}
              alt=""
            />{" "}
          </Link>
        </div>
      </div>
    </animated.footer>
  );
};

export default Footer;
