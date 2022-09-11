﻿import React from "react"
import { graphql, Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import  Layout  from "../components/layout"
import  Seo  from "../components/seo"

const Contact = ({ data }) => {
    const {name, company, address} = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Home"/>
            <h1>Contact Us</h1>
            <p>Please send all inquiries to: </p>
            <p>{company}</p>
            <p>{`C/O ${name}`}</p>
            <p>{address}</p>
            <div style = {{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <StaticImage
                    src="../images/gatsby-icon.png" 
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby Astronaut"
                    style={{ marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}



export default Contact

export const query = graphql`
    query {
    site {
          siteMetadata {
              contact {
            name
            company
            address
        }
      }
    }
  }
`