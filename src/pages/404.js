import { Link } from "gatsby"
import React from "react"

const NotFound = () => {
  return (
    <div>
      <h3>
        <span role="img" aria-labelledby="poop emoji">
          💩
        </span>
        404 Error
      </h3>
      <p>Sorry, the page you requested was not found</p>
      <Link to="/">Go back to HomePage</Link>
    </div>
  )
}

export default NotFound
