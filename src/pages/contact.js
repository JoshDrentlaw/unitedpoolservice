import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

import Layout, { Container } from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%; height: 100%;

    @media(min-width: 1024px) {
        display: grid;
        grid-template-areas: "header image"
                            "form image";
        grid-template-columns: auto minmax(200px, 400px);
        grid-template-rows: calc(36px + 1em) auto;
    }
`

const H2 = styled.h2`
    color: #72D2E5;
    font-size: 32px;
    margin-bottom: 1em;
    grid-area: header;
`

const Form = styled.form`
    grid-area: form;
    width: 100%;
`

const Image = styled(Img)`
    grid-area: image;
    width: 100%; height: 100%;
    max-width: 400px;
    max-height: 400px;
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
            <Container border="1px solid #c8c8c8" padding="1em">
                <Wrapper>
                    <H2>contact</H2>
                    <Image fluid={data.file.childImageSharp.fluid} alt="Pool cleaning hose and scruber going into a pool." />
                    <Form>
                        <fieldset name="fullName">
                            <input placeholder="First Name" />
                            <input placeholder="Last Name" />
                        </fieldset>
                        <fieldset name="info">
                            <input placeholder="Email" />
                            <input placeholder="Phone Number" />
                        </fieldset>
                        <textarea rows="3" placeholder="Type your message here..."></textarea>
                    </Form>
                </Wrapper>
            </Container>
        </Layout>
    )
}

export default ContactPage
