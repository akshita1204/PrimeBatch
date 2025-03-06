import { Link } from "react-router"
const ErrorPage=()=>
    {
        return(
            <div>
                <h2>Oops Page not found</h2>
                <Link to="/">Home</Link>
            </div>
        )
    }
    export default ErrorPage;