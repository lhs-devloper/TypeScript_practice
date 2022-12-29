import React from 'react';
import styled from 'styled-components';

type ClockProps = { }
type ClockState = {
    date: Date,
}

const StyledPosition = styled.div`
 position: fixed;
 top: 0%;
 width: 100%;
 text-align:right;
 @media screen and (max-height: 800px){
    font-size: 20px;
 }
 font-size: 30px;
`

class Clock extends React.Component<ClockProps,ClockState>{
    constructor(props: ClockProps){
        super(props)
        this.state = {
            date: new Date()
        };
    }
    timerID: any;
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
          date: new Date()
        });
    }

    render(): React.ReactNode {
        return (
            <StyledPosition>
                {this.state.date.toLocaleTimeString()}
            </StyledPosition>
        )
    }
}

export default Clock;