import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Leaderboard from '../games/Leaderboard';
import Game from '../games/Game';

class App extends PureComponent {

  render() {

    return (
      <Router>
        <Fragment>
          <header>
            <h1>Rock Paper Scissors</h1>
            <nav>
              <ul>
                <li><Link to="/">History</Link></li>
                <li><Link to="/game">Play</Link></li>
              </ul>
            </nav>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Leaderboard}/>
              <Route path="/game" component={Game}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          
          <footer>
          </footer>
        </Fragment>
      </Router>
    );
  }
}

export default App;