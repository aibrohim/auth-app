import React from "react"

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {count: props.initialCount || 0}

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    // console.log(`men tug'ildim :))`);
  }

  componentDidUpdate() {
    // console.log(`hello`); 
  }

  componentWillUnmount() {
    // console.log(`men o'lyapman :((`);
  }

  handleButtonClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>{this.state.count}</button>
    )
  }
}

export default Button;