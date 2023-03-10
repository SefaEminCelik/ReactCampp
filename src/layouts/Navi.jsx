import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import Signedin from './Signedin'
import Signedout from './Signedout'
import { useSelector } from 'react-redux'

export default function Navi() {
    const {cartItems} = useSelector(state => state.cart) 
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const navigate = useNavigate()
    function handleSignOut() {
        setIsAuthenticated(false)
       navigate('/')
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }


    return (
        <div>
            <Menu inverted fixed = "top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        {cartItems.length>0&&<CartSummary/>}
                        {isAuthenticated? <Signedin signOut={handleSignOut} bisey="1"/>
                        : <Signedout signIn={handleSignIn}/>}
                     
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
