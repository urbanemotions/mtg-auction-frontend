import React from "react";

class LoginForm extends React.Component {

    state = {
        name: " ",
        username: " "
    }
    
    onLoginCheck = event => {
        event.preventDefault();
        let info = {
            name: this.state.name,
            username: this.state.username
        };
        this.props.handleLogin(info)
        // alert('Welcome ' + this.state.value);
    };

    render() {
        return (
            <div className="login card">
                <form className="login form" onSubmit={this.onLoginCheck}>
                    <label for="Name">Name: </label>
                    <input 
                        type="text"
                        className="name field"
                        name="name"
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                    <label for="Username"> Username: </label>
                    <input
                        type="text"
                        className="username field"
                        name="username"
                        value={this.state.username}
                        onChange={event => this.setState({ username: event.target.value })}
                    />
                    <button className="login button" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;