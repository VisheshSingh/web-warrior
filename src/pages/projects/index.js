import React from "react"
import Layout from "../../components/Layout"
import styles from "../../styles/projects.module.css"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function projects({ data }) {
  const { nodes: projects } = data.allMarkdownRemark
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and websites I've created</h3>
        <div className={styles.project}>
          {projects.map(project => (
            <Link href={`/projects/${project.frontmatter.slug}`}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getProjects = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
        }
        id
      }
    }
  }
`
