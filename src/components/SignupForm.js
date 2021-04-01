import React from "react";

class SignupForm extends React.Component {

    state = {
        name: " ",
        username: " "
    }
    
    onSignup = event => {
        event.preventDefault();
        let info = {
            name: this.state.name,
            username: this.state.username
        };
        this.props.handleSignup(info)
    };

    render() {
        return (
            <div>
                <h3>Signup: </h3>
                <div className="signup card">
                    <form className="signup form" onSubmit={this.onSignup}>
                        <label for="Name">Name: </label>
                        <input
                            className="name field"
                            name="name"
                            value={this.state.name}
                            onChange={event => this.setState({ name: event.target.value })}
                        />
                        <label for="Username"> Username: </label>
                        <input
                            className="username field"
                            name="username"
                            value={this.state.username}
                            onChange={event => this.setState({ username: event.target.value })}
                        />
                        <button className="signup button" type="submit">Signup</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;