import React, { Component, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import axios from 'axios';
import { LOGOUT_URL } from './shared/apiUrl';
import Spinner from './Spinner/Spinner';

const Login = lazy(() => import('./Login/Login'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const Logout = lazy(() => import('./Logout/Logout'));
const Register = lazy(() => import('./Register/Register'));
const CalendarContainer = lazy(() => import('./CalendarContainer/CalendarContainer'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      token: null,
      isAuthenticated: false
    }
  }

  loginData(user, token) {
    this.setState({
      user: user,
      token: token,
      isAuthenticated: token !== null
    })
  }

  logout() {
    axios.post(LOGOUT_URL, {}, {
      headers: {
        Authorization: 'Bearer ' + this.state.token
      }
    }).then(response => {
      this.setState({
        user: {},
        token: null,
        isAuthenticated: false
      })
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" render={() => <Login loginData={this.loginData.bind(this)} />} />
        <Route path="/register" render={() => <Register />} />
        <Redirect to="/" />
      </Switch>
    );

    if(this.state.isAuthenticated) {
      routes = (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/calendar" render={() => <CalendarContainer user={this.state.user} token={this.state.token} />} />
          <Route path="/logout" render={() => <Logout logout={this.logout.bind(this)} />} />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <React.Fragment>
        <Header token={this.state.token} />
          <ErrorBoundary>
            <main className="main">
              <Suspense fallback={<Spinner />}>
                {routes}
              </Suspense>
            </main>
          </ErrorBoundary>
        <Footer token={this.state.token} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (document.getElementById('app')) {
  ReactDOM.render(app, document.getElementById('app'));
}