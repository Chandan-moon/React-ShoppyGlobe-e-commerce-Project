

import { useRouteError } from "react-router-dom";



function Error() {

    const err = useRouteError();


    return (

        <div>

            <h1>Oops !!</h1>
            <h2>Please Enter Correct Path</h2>

            <h3>{err.status} {err.statusText}</h3>
            <h3>{err.data}</h3>

        </div>
    )
}

export default Error;