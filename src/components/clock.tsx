import React from 'react';

type ClockProps = { }
type ClockState = {
    date: Date,
}
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
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;