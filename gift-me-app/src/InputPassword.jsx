import React from 'react';

class InputPassword extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">Senha</label>
        <div className="control has-icon-left">
          <input className="input"
            type="text"
            name="password"
            value={this.props.value}
            onChange={this.props.handleFunc}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default InputPassword;