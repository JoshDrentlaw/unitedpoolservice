import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

import Layout, { Container } from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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

    @media(min-width: 1024p) {
        width: 80%;
    }
`

const FieldSet = styled.section`
    display: flex;
    flex-direction: column;

    @media(min-width: 1024px) {
        flex-direction: row;
    }
`

const Ipt = styled.input`
    border: 1px solid black;
    padding: 0.5em;
    margin-bottom: 1em;
    width: 100%;

    @media(min-width: 1024px) {
        border-bottom: none;
        margin-bottom: 0;
        width: 50%;

        &:nth-child(odd) {
            border-right: none;
        }
    }
`

const Input = (props) => (
    <Ipt
        aria-label={props.label}
        form="contact"
        name={props.label}
        placeholder={props.placeholder}
        required={props.required}
        type={props.type}
    />
)

const Textarea = styled.textarea`
    border: 1px solid black;
    display: block;
    margin-bottom: 1em;
    padding: 0.5em;
    resize: none;
    width: 100%;

    @media(min-width: 1024px) {
        margin-bottom: 0;
    }
`

const Select = styled.select`
    border: 1px solid black;
    margin-bottom: 1em;
    padding: 0.5em;
    width: 100%;

    @media(min-width: 1024px) {
        border-top: none;
        margin-bottom: 0;
        width: auto;
    }
`

const Option = styled.option`
    padding: 0.5em;
`

const Button = styled.button`
    background-color: #323232;
    color: #FBFBFB;
    display: block;
    margin: 0 auto;
    padding: 0.5em 3em;

    @media(min-width: 1024px) {
        margin-top: 2em;
        margin-right: 1em;
    }
`

const Image = styled(Img)`
    grid-area: image;
    width: 100%; height: 100%;
    max-width: 400px;
    max-height: 400px;
    margin-bottom: 1em;

    @media(min-width: 1024px) {
        margin-bottom: 0;
    }
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
                    <Form id="contact" method="post" name="contact">
                        <FieldSet name="Full Name">
                            <Input
                                label="First name"
                                placeholder="First Name"
                                required="required"
                                type="text"
                            />
                            <Input
                                label="Last name"
                                placeholder="Last Name"
                                required="required"
                                type="text"
                            />
                        </FieldSet>
                        <FieldSet name="Personal Info">
                            <Input
                                label="Email"
                                placeholder="Email"
                                required="required"
                                type="email"
                            />
                            <Input
                                label="Phone number"
                                placeholder="Phone Number"
                                type="tel"
                            />
                        </FieldSet>
                        <Textarea name="Message" rows="5" placeholder="Type your message here..." />
                        <Select
                            form="contact"
                            name="Awareness"
                        >
                            <Option>How did you hear about us?</Option>
                            <Option>Referal</Option>
                            <Option>Social Media</Option>
                            <Option>Internet Search</Option>
                            <Option>Other</Option>
                        </Select>
                        <Button form="contact" name="submit" type="submit">Submit</Button>
                    </Form>
                </Wrapper>
            </Container>
        </Layout>
    )
}

export default ContactPage
