import React from "react";
import Greeting from "./greeting";

type LoginProps = {
    onClick: any
}

type ControlProps = { }
type LoginState = {
    isLoggedIn: Boolean
}


class LoginButton extends React.Component<LoginProps>{
    render(): React.ReactNode {
        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        )
    }
}

class LogoutButton extends React.Component<LoginProps>{
    render(): React.ReactNode {
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        )
    }
}

class LoginControl extends React.Component<ControlProps, LoginState>{
    constructor(props: LoginProps){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }

    render(): React.ReactNode {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else{
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default LoginControl