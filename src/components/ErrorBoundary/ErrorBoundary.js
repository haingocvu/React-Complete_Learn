import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errMsg: ''
        }
    }
    componentDidCatch = (err, info) => {
        this.setState({
            hasError: true,
            errMsg: err.message
        })
    }
    render() {
        if (this.state.hasError) return <h1>{this.state.errMsg}</h1>
        return this.props.children
    }
}

export default ErrorBoundary;