import React from 'react'

type HumanProps = {
    name: String
}
  
class Welcome extends React.Component<HumanProps>{
    render(): React.ReactNode {
      return <h1>Welcome, {this.props.name}</h1>
    }
}
export default Welcome