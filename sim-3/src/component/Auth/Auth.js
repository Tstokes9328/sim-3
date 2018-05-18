import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loggedUser} from '../../ducks/reducer';

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: "",
            password: ""
        }

        this.updateUser = this.updateUser.bind(this);
        this.updatePass = this.updatePass.bind(this);
        this.newUser = this.newUser.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    updateUser(event){
        this.setState({username: event.target.value})
        console.log(this.state.username)
    }

    updatePass(event){
        this.setState({password: event.target.value})
        console.log(this.state.password)
    }

    newUser(){
        let {username, password} = this.state;
        axios.post('/users/new', {username, password}).then(() => {
            window.location="/#/dashboard"
            this.props.loggedUser();
        })
    }

    loginUser(){
        let {username, password} = this.state;
        axios.post('/users/login', {username, password}).then((res) => {
            window.location="/#/dashboard"
            this.props.loggedUser(res.data.userId, res.data.username, res.data.profile);
        })
    }

    render(){
        return(
            <div>
                Username: <input type="text" onChange={this.updateUser}/>
                <input type="password" name="password" onChange={this.updatePass}/>
                <button onClick={() => this.loginUser()}>Login</button>
                <button onClick={() => this.newUser()}>Register</button>
            </div>
        )
    }
}

export default connect(null, {loggedUser})(Auth);