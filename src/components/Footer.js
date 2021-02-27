import React from "react"

const Footer = () => {
  return (
    <div>
      <p>
        Copyright &copy; {new Date().getFullYear()} | Web Warrior{" "}
        <span role="img" aria-labelledby="web warrior">
          🐱‍👓
        </span>
      </p>
    </div>
  )
}

export default Footer
