import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SignUpLogIn from './SignUpLogIn';
import { Modal, Button } from 'react-materialize'

const Nav = styled.div`
border: solid black 1px;
width: 99vw;
height: 55px;
background-color: black;
display: flex;
align-items: center;
a{
    color: white;
    text-decoration: none;
    font-family: 'Bungee', cursive;
    font-size: 30px;
}
a:hover{
    font-style: italic;
}`

const NavStyled = styled.div`
display: flex;
justify-content: space-between;
width: 100vw;`

const LogoStyled = styled.div`
margin-left: 10px;`

const IconStyled = styled.div`
margin-right: 10px;`

class Navbar extends Component {
    render() {
        return (
            <div>
                <Nav >
                    <NavStyled >
                        <LogoStyled >
                            <Link to="/"> Chat Stream </Link>
                        </LogoStyled>
                        <IconStyled >
                            <Modal
                                header='Sign Up /Sign In'
                                trigger={<Button className="black"><i class="material-icons">group</i></Button>}>
                                <SignUpLogIn />
                            </Modal>
                        </IconStyled>
                    </NavStyled>
                </Nav>
            </div>
        );
    }
}

export default Navbar;