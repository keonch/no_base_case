import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderNameInput(){
    if (this.props.formType === 'Signup') {
      return (
        <label>Name
          <input type='text' value={this.state.name} onChange={this.update('name')} className='signup-input' />
        </label>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">

        <h2>{this.props.formType}</h2>

        <form onSubmit={this.handleSubmit} className="login-form-box">
          { this.renderErrors() }

          <div className="login-form">

            { this.renderNameInput() }

            <br/>

            <label>Username
              <input type="text" value={this.state.email} onChange={this.update('email')} className="signup-input" />
            </label>

            <br/>

            <label>Password
              <input type="password" value={this.state.password} onChange={this.update('password')} className="signup-input"/>
            </label>

            <br/>

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
