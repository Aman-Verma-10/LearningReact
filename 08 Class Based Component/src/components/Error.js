import { useRouteError } from "react-router";


// useRouterError gives more information about route error. It provides the error object which contains error info in detail
const Error = () => {
    const err = useRouteError();
    

    return (
        <div>
            <h1>Oops !!!</h1>
            <h2>Something went wrong !!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;