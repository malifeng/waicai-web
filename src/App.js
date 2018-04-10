import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import {} from "react-router-dom";
import PropTypes from "proptypes";

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props,context){
    super(...arguments)
    // this.submit = this.submit.bind(this);
  }
  submit(aa){
      console.log("submit")
      console.log(this.context)
      console.log(aa)
      this.context.router.history.push('/home')
  }
  render() {
    return (
        <div className='login-form'>
            {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}

            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
            <Grid
                textAlign='center'
                style={{height: '100%'}}
                verticalAlign='middle'
            >
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        {' '}Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button color='teal' fluid size='large' onClick={()=>this.submit('aaa')}>Login</Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );
  }
}

App.contextTypes = {
    router: PropTypes.object.isRequired
};
export default App;


