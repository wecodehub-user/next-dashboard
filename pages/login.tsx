import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signIn } from '../utils/authentication'
import { handleAuthentication } from '../utils/authentication'
import { NextPageContext } from 'next'

const LoginPage = () => {
    const onSubmit = () => {
        signIn()
    }

    return (
        <Container style={{textAlign: 'center', marginTop: '100px'}}>
            <Row>
                <Col md={{ span: 4, offset: 4}}>
                    <Form onSubmit={onSubmit}>
                        <img className="mb-4" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <Form.Group controlId="formEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" block={true}>
                            Sign in
                        </Button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
                    </Form>
                </Col>
            </Row>
      </Container>
    )
}

LoginPage.getInitialProps = async (ctx: NextPageContext) => {
    await handleAuthentication(ctx)
    return {}
}

export default LoginPage
