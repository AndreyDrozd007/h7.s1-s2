import React from 'react'
import Button from './Button'

class CounterApp extends React.Component {

    state = {
        number: 0    
    }

    plusCount = () => {
        this.setState({number: this.state.number + 1})
    };
    minusCount = () => {
        this.setState({number: this.state.number - 1})
    }

y
    render() {
        return (
            <div>
              <Button label='-' onClick={this.minusCount} />
              {this.state.number}
              <Button label='+' onClick={this.plusCount} />
            </div>
        )
    }
}
export default CounterApp;