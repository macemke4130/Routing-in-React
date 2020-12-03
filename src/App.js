import { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FilmPage from './components/FilmPage';
import PeoplePage from './components/PeoplePage';
import LandingPage from './components/LandingPage';
import IdFilm from './components/IdFilm';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <nav>
                        <Link to="/"><button className="btn btn-info btn-sm">Take Me Home!</button></Link>
                        <Link to="/FilmPage"><button className="btn btn-info btn-sm">Show Me Films!</button></Link>
                        <Link to="/PeoplePage"><button className="btn btn-info btn-sm">Show Me People!</button></Link>
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