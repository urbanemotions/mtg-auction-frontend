import React from "react";

class SignupForm extends React.Component {
    
    constructor() {
        this.state = {
            name: " ",
            username: " "
        };
    }
    
    onSignup = event => {
        event.preventDefault();
        let info = {
            name: this.state.name,
            username: this.state.username
        };
    };

    render() {
        return (
            <div className="signup card">
                <form className="signup form" onSubmit={this.onSignup}>
                    <input
                        className="name field"
                        name="name"
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                    <input
                        className="username field"
                        name="username"
                        value={this.state.username}
                        onChange={event => this.setState({ username: event.target.value })}
                    />
                    <button className="signup button" type="Signup" onClick={this.props.signup}>Signup</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;