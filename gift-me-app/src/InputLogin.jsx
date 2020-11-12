import React from 'react';

class InputLogin extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">Login</label>
        <div className="control has-icon-left">
          <input className="input"
            type="text"
            name="login"
            value={this.props.value}
            onChange={this.props.handleFunc}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default InputLogin;