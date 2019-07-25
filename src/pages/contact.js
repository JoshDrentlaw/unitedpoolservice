import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

import Layout, { Container } from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    width: 100%; height: 100%;

    @media(min-width: 1024px) {
        flex-direction: row;
    }
`

const H2 = styled.h2`
    color: #72D2E5;
    font-size: 32px;
    margin-bottom: 1em;
`

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "images/contact-hose.webp"}) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 375) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Contact" />
            <Container border="1px solid #c8c8c8" padding="2em">
                <Wrapper>
                    <form>
                        <H2>contact</H2>

                    </form>
                    <Img fluid={data.file.childImageSharp.fluid} alt="Pool cleaning hose and scruber going into a pool." />
                </Wrapper>
            </Container>
        </Layout>
    )
}

export default ContactPage
