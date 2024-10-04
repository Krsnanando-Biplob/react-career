import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-32 border py-4 bg-purple-50">
      <h1 className="text-4xl text-center font-bold">Oops!!!</h1>
      <h1 className="font-bold my-2">NOT FOUND</h1>
      <Link to="/">go back</Link>
    </div>
  );
};

export default ErrorPage;