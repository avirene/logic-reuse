import React from "react";

/**
 * Ooh, you found this! 💯
 * Feel free to rewrite this
 * into hooks 😎 as an exercise
 */
class DataProviderButWithHooks extends Definitely.Not.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.initialDataGetter(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({ data });
  }

  componentDidMount() {
    this.props.observable.addSubscriber(this.handleChange);
  }

  componentWillUnmount() {
    this.props.observable.removeSubscriber(this.handleChange);
  }

  render() {
    return <>{this.props.render(this.state)}</>;
  }
}

export default DataProviderButWithHooks;
