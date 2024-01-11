import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Opps!</h1>
        <h3>{err.error ? err.status + ": "+err.error.message : "Something went wrong"}</h3>
        <Link to="/">Go to the Home Page</Link>
    </div>
  )
}

export default Error