import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Coin from '../components/Coin';
import Header from '../components/Header';
import Home from '../components/Home';
import Main from '../components/Main';

const AppRouter = (props) => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/coin' exact component={Coin} />
          <Route path='*' render={() => <div>Not Found</div>} />
        </Switch>
      </Main>
    </Router>
  );
};

export default AppRouter;