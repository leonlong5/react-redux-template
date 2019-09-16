import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    
    //new in react 16, like try catch lifecycle hook
    componentDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops, Error occured</h1>
        }
        return this.props.children   
    }
}

export default ErrorBoundry