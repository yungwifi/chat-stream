import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "../util/SessionHeaderUtil"
import styled from 'styled-components'

const StyledForm = styled.div`
width: 45vw;`

const StyledButton = styled.div`
display: flex;
justify-content: space-between;`

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        signedIn: false,
        redirect: false
    }

    async componentDidMount() {
        try {
            const signedIn = userIsLoggedIn()
            if (signedIn) {
                setAxiosDefaults()
            }

            this.setState({
                signedIn
            })
        } catch (error) {
            console.log(error)
        }
    }

    signUp = async (event) => {
        event.preventDefault()
        try {
            const payload = {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
            const response = await axios.post('/auth', payload)
            saveAuthTokens(response.headers)

            this.setState({
                signedIn: true,
                redirect: true
            })

        } catch (error) {
            console.log(error)
        }
    }

    signIn = async (event) => {
        event.preventDefault()
        try {
            const payload = {
                email: this.state.email,
                password: this.state.password
            }
            const response = await axios.post('/auth/sign_in', payload)
            saveAuthTokens(response.headers)

            this.setState({
                signedIn: true,
                redirect: true
            })

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        console.log(newState)
        this.setState(newState)
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/chat" />)
        }
        return (
            <div>
                <StyledForm >
                    <form>
                        <div>
                            <label htmlFor="email">E-mail: </label>
                            <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                        </div>
                        <div>
                            <label htmlFor="password_confirmation">Confirm Password: </label>
                            <input onChange={this.handleChange} type="password" name="password_confirmation"
                                value={this.state.password_confirmation} />
                        </div>
                        <StyledButton >
                            <button onClick={this.signUp}>Sign Up</button>
                            <button onClick={this.signIn}>Log In</button>
                        </StyledButton>
                    </form>
                </StyledForm>
            </div>
        )
    }
}

export default SignUpLogIn