import React from "react";

class LoginForm extends React.Component {
    
    constructor() {
        this.state = {
            name: " ",
            username: " "
        };
    }
    
    onLoginCheck = event => {
        event.preventDefault();
        let info = {
          name: this.state.name,
          username: this.state.username
        };
        alert('Welcome ' + this.state.value);
// how do you check if the value is equal to the signedup user
    };

    // if i used this i would need two to get the value of name and username fields
    // handleChange(event) {
    //     this.setState({name: event.target.value});
    // }

    render() {
        return (
            <div className="login card">
                <form className="login form" onSubmit={this.onLoginCheck}>
                    <input 
                        type="text"
                        className="name field"
                        name="name"
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                    <input
                        type="text"
                        className="username field"
                        name="username"
                        value={this.state.username}
                        onChange={event => this.setState({ username: event.target.value })}
                    />
                    <button className="login button" type="Login" onClick={this.props.login}>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;