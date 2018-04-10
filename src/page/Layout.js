import React, { Component } from 'react'
import { Switch,Route,Link} from 'react-router-dom'
import { Button, Dropdown, Menu,Container } from 'semantic-ui-react'
import Data  from '../components/Data'
import  '../css/layout.css'
import PropTypes from "proptypes";
import {test} from "../api/getData"

class Layout extends Component {
    constructor(props,context){
        super(...arguments)
        console.log(this.context)
        this.state = { activeItem: 'home' }
    }
    handelChoice(){
        test('/data',{})
        console.log(this.state.activeItem)
    }

    handleItemClick = (route) => {
        this.context.router.history.push(route)
    }

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Menu size='huge' fixed ="top" inverted className='container'fluid={true} >
                    <Container>
                        <Menu.Item name='home' active={activeItem === '/'} onClick={()=>this.handleItemClick("/home")} />
                        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={()=>this.handleItemClick("/home")} />

                        <Menu.Menu position='right'>
                            <Dropdown item text='Language'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>English</Dropdown.Item>
                                    <Dropdown.Item>Russian</Dropdown.Item>
                                    <Dropdown.Item>Spanish</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Menu.Item>
                                <Button primary onClick={()=>{this.handelChoice()}}>Sign Up</Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>
                <div className="content">
                    <Switch>
                        <Route  path='/home' component={Data}></Route>
                    </Switch>
                </div>
            </div>

        )
    }
}

Layout.contextTypes = {
    router: PropTypes.object.isRequired
};

export default Layout;