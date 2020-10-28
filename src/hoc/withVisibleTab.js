import React from 'react';

const withVisibleTab = (WrapperComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isVisibleTab: true
      }
    }

    componentDidMount() {
      // для safari не подходит
      document.addEventListener('visibilitychange', () => this.setState({ isVisibleTab: !document.hidden }))
    }

    componentWillUnmount() {
      document.removeEventListener('visibilitychange', () => this.setState({ isVisibleTab: false }))
    }

    render() {
      const data = { ...this.props, ...this.state }
      return (
        <WrapperComponent {...data} />
      )
    }
  }
};

export default withVisibleTab;