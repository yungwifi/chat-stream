import React, { Component } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomeButton = styled.div`
a{
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: black;
    width: 100vw;
    text-align: center;
    font-size: 20px;
    font-family: 'Bungee', cursive;
}
a:hover{
    background-color: yellow;
}`

const HomePageContainer = styled.div`
background-image: url('https://i.imgur.com/WLhnndt.gif');
background-attachment: fixed;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
margin: 0 auto;`

const ButtonStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;`

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomePageContainer >
                    <ButtonStyle>
                        <HomeButton><Link to="/posts"> Shut Up. </Link></HomeButton>
                    </ButtonStyle>
                </HomePageContainer>
            </div>
        );
    }
}

export default HomePage;