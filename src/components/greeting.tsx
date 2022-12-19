import React from "react";

type GreetingProps = {
    isLoggedIn: Boolean
}
type UserProps = {}
type GuestProps = {}
class UserGreeting extends React.Component<UserProps>{
    render(): React.ReactNode {
        return <h1>Welcome back!</h1>
    }
}

class GuestGreeting extends React.Component<GuestProps>{
    render(): React.ReactNode {
        return <h1>Please sign up.</h1>
    }
}

class Greeting extends React.Component<GreetingProps>{
    render(): React.ReactNode {
        const isLoggedIn = this.props.isLoggedIn;
        if(isLoggedIn){
            return <UserGreeting />
        }
        return <GuestGreeting />
    }
}

export default Greeting