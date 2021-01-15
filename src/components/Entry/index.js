import React, {Component} from 'react';
//Style


//Parts
import LoginAndLogoutButton from "../LoginAndLogoutButton";

export class Entry extends Component {
    constructor(props) {
        super(props);
        this.loginClick = this.handleLoginClick.bind(this);
        this.logoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: true}
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    render() {
        const {isLoggedIn} = this.state;
        return (
            <div>
                {isLoggedIn
                    ? <LoginAndLogoutButton text={'Выйти'} onClick={this.logoutClick}/>
                    : <LoginAndLogoutButton text={'Войти'} onClick={this.loginClick}/>}
            </div>

        )
    }
}