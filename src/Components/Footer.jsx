import { useSpring, animated } from "react-spring";
import twitter from "../assets/Social-Icons/twitter.png";
import linkedin from "../assets/Social-Icons/linkedin.png";
import github from "../assets/Social-Icons/github.png";
import facebook from "../assets/Social-Icons/facebook.png";

const Footer = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.footer
      style={fade}
      className="mt-10 bg-gray-800 text-white py-6 px-4"
    >
      <div className="container max-w-5xl mx-auto text-center">
        <aside className="mb-6 space-y-1 text-sm md:text-base">
          <p>Made with <span role="img" aria-label="heart">❤️</span> by Protap Biswas</p>
          <p>&copy; {new Date().getFullYear()} Protap Biswas</p>
        </aside>
        <nav aria-label="Social media links">
          <ul className="flex justify-center space-x-6">
            {[{
              href: "https://www.facebook.com/protap.biswas1100",
              src: facebook,
              alt: "Facebook",
            }, {
              href: "https://www.linkedin.com/in/protap-biswas1100/",
              src: linkedin,
              alt: "LinkedIn",
            }, {
              href: "https://github.com/protap1100",
              src: github,
              alt: "GitHub",
            }, {
              href: "https://twitter.com/protapb110",
              src: twitter,
              alt: "Twitter",
            }].map(({ href, src, alt }) => (
              <li key={alt}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="inline-block transition-transform duration-200 hover:scale-110 hover:opacity-80"
                >
                  <img className="h-8 w-8" src={src} alt={alt} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </animated.footer>
  );
};

export default Footer;
