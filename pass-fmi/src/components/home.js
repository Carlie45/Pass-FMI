import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/styles.css'; 

@connect()
export default class Home extends Component {

  render() {
    return (
      <div>
       <h2 className="paragraph-title">Каква е целта на приложението?</h2>
       <p className="paragraph-body">Pass FMI е проект, който цели да подпомогне студентите в намиране на учебни материали, необходими за техните курсове.<br/><br/>
       За да пишете коментари или да качвате материали, моля първо се регистрирайте и влезте в приложението.<br/><br/>

       <div className="container">
         <div className="row">
            <div className="col-lg-6">
              <h4>Регистрация</h4>
              <form method="post">
                  <div class="form-group">
                    <label for="reg-username">Потребителско име:</label>
                    <input id="reg-username" className="form-control" type="text"/>
                  </div>
                  <div class="form-group">
                    <label for="reg-password">Парола:</label>
                    <input id="reg-password" className="form-control"type="password"/>
                  </div>
                  <div class="form-group">
                    <label for="first-name">Име:</label>
                    <input id="first-name" className="form-control"  type="text"/>
                  </div>
                  <div class="form-group">
                    <label for="last-name">Фамилия:</label>
                    <input id="last-name" className="form-control" type="text"/>
                  </div>
                  <div class="form-group">
                    <label for="email">e-mail:</label>
                    <input id="email" className="form-control"  type="text"/>
                  </div>
                  <div class="form-group">
                    <label for="phone">Телефон:</label>
                    <input id="phone" className="form-control"  type="text"/>
                  </div>

                  <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                      <button id="register" type="submit" className="btn btn-primary">Изпрати</button>
                    </div>
                  </div>
              </form>
            </div>
            <div className="col-lg-6">
              <h4>Влизане</h4>
              <form method="post">
                <div class="form-group">
                    <label for="login-username">Потребителско име:</label>
                    <input id="login-username" className="form-control" type="text"/>
                  </div>
                  <div class="form-group">
                    <label for="login-password">Парола:</label>
                    <input id="login-password" className="form-control" type="password"/>
                  </div>

                  <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                      <button id="login" type="submit" className="btn btn-primary">Влез</button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
       </div>
       </p>
      </div>
    );
  }
}