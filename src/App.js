import { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FilmPage from './components/FilmPage';
import PeoplePage from './components/PeoplePage';
import LandingPage from './components/LandingPage';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <nav>
                        <Link to="/">Take Me Home!</Link>
                        <Link to="/FilmPage">Show Me Films!</Link>
                        <Link to="/PeoplePage">Show Me People!</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/FilmPage" component={FilmPage} />
                        <Route path="/PeoplePage" component={PeoplePage} />
                    </Switch>
                </Fragment>
            </Router>
        )

    }
}

export default App;