import React from "react"

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} | Web Warrior{" "}
        <span role="img" aria-labelledby="web warrior">
          🐱‍👓
        </span>
      </p>
    </footer>
  )
}

export default Footer
