import React from 'react';
import InputLogin from './InputLogin';
import InputPassword from './InputPassword';
import ButtonSubmit from './ButtonSubmit';
import SignIn from './SignIn';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      login: '',
      password: ''
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <InputLogin value={this.state.login} handleFunc={this.handleChange} />
        <InputPassword value={this.state.password} handleFunc={this.handleChange} />
        <ButtonSubmit />
        <SignIn />
      </div>
    );
  }
}

export default LoginForm;