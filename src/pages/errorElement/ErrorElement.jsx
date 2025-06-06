import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
};

export default ErrorElement;
