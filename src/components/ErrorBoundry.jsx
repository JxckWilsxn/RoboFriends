import React,{ Component } from "react";

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good. Failure to load available contacts.</h1>
        }
        return this.props.children 
    }
}
export default ErrorBoundry;