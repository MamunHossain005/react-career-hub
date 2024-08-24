import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div  className="flex justify-center items-center border h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold">OOPs!</h1>
                <p className="text-xl font-semibold">Sorry, an unexpected error has occurred.</p>
                <p><i>{error.statusText || error.message}</i></p>
                <Link to={"/"}>Go back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;