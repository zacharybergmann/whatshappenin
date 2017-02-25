import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import NotFound from './components/notFound.jsx';
import Auth from './modules/Auth';
import UserPage from './components/UserPage.jsx'

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        fetch('/verify')
        .then((status) => {
          console.log(status);
          if (status !== 400 || Auth.isUserAuthenticated()) {
            callback(null, DashboardPage);
          } else {
            callback(null, HomePage);
          }
        });
        // if (Auth.isUserAuthenticated()) {
        //   callback(null, DashboardPage);
        // } else {
        //   callback(null, HomePage);
        // }
      },
    },

    {
      path: '/login',
      component: LoginPage,
    },

    {
      path: '/signup',
      component: SignUpPage,
    },
    {
      path: '/userpage',
      component: UserPage,
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      },
    },
    {
      path: '/auth/google/callback',
      onEnter: (nextState, replace) => {
        replace('/');
      }
    },

    {
      path: '*',
      component: NotFound,
    },

  ],
};

export default routes;
