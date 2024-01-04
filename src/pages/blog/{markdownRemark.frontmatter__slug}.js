import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {imageWrapper, imageAttributionWrapper} from './blog.module.css'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.markdownRemark.frontmatter.hero_image)
  const imageAttribution = data.markdownRemark.frontmatter.hero_image_credit_text;
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
    <div className={imageWrapper}>
      <GatsbyImage
      image={image}
      alt={data.markdownRemark.frontmatter.hero_image_alt}
      />{imageAttribution && (
          <div className={imageAttributionWrapper}>
              {imageAttribution}
          </div>
      )}
    </div>
    <p>Posted {data.markdownRemark.frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default BlogPost
