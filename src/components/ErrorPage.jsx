import { useRouteError } from "react-router-dom";
import error404 from "../assets/404-1.svg";
import Headline from "./Headline";
import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  console.error(error);

  return (
    <section className=" max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto">
      <div className="text-lg leading-relaxed space-y-6 max-w-5xl 2xl:mx-auto  text-center">
        <Headline headline="Oops!"></Headline>
        <img className="w-1/3 mx-auto" src={error404} alt="404 image" />
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>Error: {error.statusText || error.message}</i>
        </p>
        <button
          onClick={handleGoHome}
          className="text-center p-8 bg-slate-500 border border-slate-500 hover:border-slate-800 py-4 rounded-xl font-medium text-xl text-slate-200 "
        >
          Go Home
        </button>
      </div>
    </section>
  );
}
