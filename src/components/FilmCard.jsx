import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IdFilm from './IdFilm';

class FilmCard extends Component {
    showPreview(x) {
        return x.substring(0, 150)
    }

    render() {
        return this.props.filmList.map((i) => (
            <>
                <div className="col-12 col-lg-5">
                    <div className="card shadow p-1">
                        <h3>{i.title}</h3>
                        <p>{this.showPreview(i.description)}...</p>
                        <Router>
                            <Link to="/flick"><button className="btn btn-info">More Info</button></Link>
                            <Switch>
                                <Route exact path="/flick" component={IdFilm} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </>
        ));
    }
}

export default FilmCard;