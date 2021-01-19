import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "foto2.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Img
      fluid={avatarImage.childImageSharp.fluid}
      className="foo"
      style={{ width: "60px" }}
    />
  )
}

export default Avatar
