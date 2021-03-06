import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

@connect()
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.username = null;
    this.password = null;
    this.registerUser = {};
  }

  onLoginClicked() {
    this.props.login(this.username, this.password, '/items');
  }

  onLogoutClicked() {
    this.props.logout();
  }

  onRegisterClicked() {
    this.registerUser.role = 'Dummy';
    this.props.register(this.registerUser,'');
  }

  render() {
    let userLoggedin = null;

    if(!this.props.user) {
      userLoggedin = (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>Регистрация</h4>
              <div className="form-group">
                <label>Потребителско име:</label>
                <input id="reg-username" className="form-control" type="text" onChange={(e, username) => {
                  this.registerUser.username = e.target.value;
                }}/>
              </div>
              <div className="form-group">
                <label>Парола:</label>
                <input id="reg-password" className="form-control"type="password" onChange={(e, username) => {
                  this.registerUser.password = e.target.value;
                }}/>
              </div>
              <div className="form-group">
                <label>Име:</label>
                <input id="first-name" className="form-control"  type="text" onChange={(e, username) => {
                  this.registerUser.firstName = e.target.value;
                }}/>
              </div>
              <div className="form-group">
                <label>Фамилия:</label>
                <input id="last-name" className="form-control" type="text" onChange={(e, username) => {
                  this.registerUser.lastName = e.target.value;
                }}/>
              </div>
              <div className="form-group">
                <label>e-mail:</label>
                <input id="email" className="form-control"  type="text" onChange={(e, username) => {
                  this.registerUser.email = e.target.value;
                }}/>
              </div>
              <div className="form-group">
                <label>Телефон:</label>
                <input id="phone" className="form-control"  type="text" onChange={(e, username) => {
                  this.registerUser.phone = e.target.value;
                }}/>
              </div>

              <div className="offset-sm-2 col-sm-10">
                <button id="register" type="submit" className="btn btn-primary" onClick={() => {
                  this.onRegisterClicked();
                }}>Изпрати</button>
              </div>
            </div>
            <div className="col-lg-6">
              <h4>Влизане</h4>
              <div className="form-group">
                <label>Потребителско име:</label>
                <input id="login-username" className="form-control" type="text" onChange={(e, username) => {
                  this.username = e.target.value;
                }}/>
              </div>
              <div className="form-group">
                <label>Парола:</label>
                <input id="login-password" className="form-control" type="password" onChange={(e, password) => {
                  this.password = e.target.value;
                }}/>
              </div>

              <div className="form-group">
                <div className="offset-sm-2 col-sm-10">
                  <button id="login" type="submit" className="btn btn-primary" onClick={() => {
                    this.onLoginClicked();
                  }}>Влез</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    } else {
      userLoggedin = null;
    }

    return (
      <div>
        {this.props.user && <h1 className="welcome-title">Здравей, {this.props.user.username}!</h1>}
        <h2 className="paragraph-title">Каква е целта на приложението?</h2>
        <p className="paragraph-body">Pass FMI е проект, който цели да подпомогне студентите в намиране на учебни материали, необходими за техните курсове.<br/><br/>
        За да пишете коментари или да качвате материали, моля първо се регистрирайте и влезте в приложението.</p>
        <br/><br/>
        {userLoggedin}
      </div>
    );
  }
}
