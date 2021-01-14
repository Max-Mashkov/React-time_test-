import React, {Component} from 'react';

//parts
import  LoginAndLogoutButton from "./LoginAndLogoutButton";

export  class Entry extends Component {
    constructor(props) {
        super(props);
        this.loginClick = this.handleLoginClick.bind(this);
        this.logoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: true}
    }

    handleLoginClick() {
        this.setState({isLoggedIn: false})
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: true})
    }

    render() {
        const {isLoggedIn} = this.state;
        return(
            <div>
            {isLoggedIn
            ? <LoginAndLogoutButton text={'Exit'} onClick={this.logoutClick}/>
            : <LoginAndLogoutButton text={'Enter'} onClick={this.loginClick}/>}
            </div>
        )
    }
}