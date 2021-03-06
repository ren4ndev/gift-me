import React from 'react';

class InputPassword extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">Senha</label>
        <div className="control has-icon-left">
          <input className="input is-rounded"
            type="password"
            name="password"
            value={this.props.value}
            onChange={this.props.handleFunc}
            placeholder="Insira sua Senha"
          />
          <span className="icon is-small is-left">
            {/* <i className="fas fa-lock"></i> */}
          </span>
        </div>
      </div>
    );
  }
}

export default InputPassword;