import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer and Web developer</p>
          <Link className={styles.btn} to="/projects">
            Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="home page" style={{ width: "100%" }} />
      </section>
      <p>
        {title} - {description}
      </p>
    </Layout>
  )
}

export const siteDetails = graphql`
  query siteDetails {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
