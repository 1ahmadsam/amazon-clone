import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HXOZSCGNMAhcRfkf5xPEToAgvx9MWNhrcyRh9V4eYG9aGXRAd5cKvvmMTu3eZGZtEjJfIYDkx179518OafN2Df200Gg1LJp9V'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        console.log(authUser);
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
