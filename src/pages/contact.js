import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { CSSTransitionGroup } from 'react-transition-group'

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
    grid-area: header;
    margin-bottom: 0.5em;

    @media(min-width: 1024px) {
        margin-bottom: 1em;
    }
`

const Form = styled.form`
    grid-area: form;
    width: 100%;

    @media(min-width: 1024p) {
        width: 80%;
    }

    .success-enter {
        opacity: 0.01;
        transform: translateY(1em);
    }

    .success-enter.success-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: all 500ms ease-in;
    }

    .success-leave {
        opacity: 1;
    }

    .success-leave.success-leave-active {
        opacity: 0.01;
        transition: opacity 500ms ease-in;
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

    &:hover, &:focus {
        border: 2px solid black;
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
        value={props.value}
        onChange={(e) => {
            props.setter(e.target.value)
        }}
    />
)

const Extra = styled(Input)`
    @media(min-width: 1024px) {
        &:nth-child(odd) {
            border: 1px solid black;
            border-top: none;
        }
    }
`

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

    &:hover, &:focus {
        border: 2px solid black;
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

    &:hover, &:focus {
        border: 2px solid black;
    }
`

const Option = styled.option`
    padding: 0.5em;

    &:hover, &:focus {
        border: 2px solid black;
    }
`

const Message = styled.h3`
    color: #003C48;
    display: block;
    font-size: 20px;
    margin: 2em auto 0;
    text-align: center;
    width: auto;

    @media(min-width: 1024px) {
        margin-top: 2em;
        margin-right: 1.7em;
        margin-bottom: -1em;
        text-align: right;
    }
`

const Button = styled.button`
    background-color: #323232;
    color: #FBFBFB;
    display: block;
    margin: 2em auto 0;
    padding: 0.5em 3em;

    @media(min-width: 1024px) {
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

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const ContactPage = (props) => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "images/contact-hose.webp"}) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 375, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [awareness, setAwareness] = useState("")
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        fetch("/contact/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                "First name": fname,
                "Last name": lname,
                "Email": email,
                "Phone number": phone,
                "Message": message,
                "Awareness": awareness
            })
        })
            .then(data => {
                if (data.status === 200) {
                    setFname("")
                    setLname("")
                    setEmail("")
                    setPhone("")
                    setMessage("")
                    setAwareness("")
                    setSuccess(true)
                    setTimeout(() => {setSuccess(false)}, 5000)
                }
            })
            .catch(error => alert(error))

        e.preventDefault()
    }

    let extra;

    switch (awareness) {
        case "": 
            extra = null;
            break;
        case "referal":
            extra = 
                <Extra
                    label="Referal"
                    placeholder="Who?"
                    type="text"
                />
            break;
        case "social media":
            extra = 
                <Extra
                    label="Social Media"
                    placeholder="Where?"
                    type="text"
                />
            break;
        case "internet search":
            extra = 
                <Extra
                    label="Internet Search"
                    placeholder="Which terms?"
                    type="text"
                />
            break;
        case "other":
            extra = 
                <Extra
                    label="Other"
                    placeholder="Any extra info would be great!"
                    type="text"
                />
            break;
        default: 
            extra = null;
            break;
    }

    return (
        <Layout>
            <SEO 
                title="Contact"
                description="United Pool Service is always looking for new customers. If you like what you see, please get in touch with us."
            />
            <Container border="1px solid #c8c8c8" padding="1em">
                <Wrapper>
                    <H2>contact</H2>
                    <Image fluid={data.file.childImageSharp.fluid} alt="Pool cleaning hose and scruber going into a pool." />
                    <Form id="contact" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                        <FieldSet name="Full Name">
                            <Input
                                label="First name"
                                placeholder="First Name"
                                required="required"
                                type="text"
                                setter={setFname}
                                value={fname}
                            />
                            <Input
                                label="Last name"
                                placeholder="Last Name"
                                required="required"
                                type="text"
                                setter={setLname}
                                value={lname}
                            />
                        </FieldSet>
                        <FieldSet name="Personal Info">
                            <Input
                                label="Email"
                                placeholder="Email"
                                required="required"
                                type="email"
                                setter={setEmail}
                                value={email}
                            />
                            <Input
                                label="Phone number"
                                placeholder="Phone Number"
                                type="tel"
                                setter={setPhone}
                                value={phone}
                            />
                        </FieldSet>
                        <Textarea
                            name="Message"
                            rows="5"
                            placeholder="Type your message here..."
                            form="contact"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }} />
                        <Select
                            form="contact"
                            name="Awareness"
                            value={awareness}
                            onChange={(e) => {
                                setAwareness(e.target.value)
                            }}
                        >
                            <Option>How did you hear about us?</Option>
                            <Option value="referal">Referal</Option>
                            <Option value="social media">Social Media</Option>
                            <Option value="internet search">Internet Search</Option>
                            <Option value="other">Other</Option>
                        </Select>
                        {/* {extra} */}
                        <CSSTransitionGroup
                            transitionName="success"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                        >
                            {success ?
                                <Message key={1}>Thank you!</Message>
                                :
                                (null)
                            }
                        </CSSTransitionGroup>
                        <Button form="contact" name="submit" type="submit">Submit</Button>
                    </Form>
                </Wrapper>
            </Container>
        </Layout>
    )
}

export default ContactPage
