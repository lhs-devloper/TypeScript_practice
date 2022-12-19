import React from "react";

type toggleProps = { }
type toggleState = {
    isToggleOn: Boolean
}

class Toggle extends React.Component<toggleProps, toggleState>{
    constructor(props: toggleProps){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render(): React.ReactNode {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle;