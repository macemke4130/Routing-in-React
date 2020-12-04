import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PeopleCard extends Component {

    render() {
        return this.props.peopleList.map((i) => (
            <>
                <div className="col-12 col-lg-5">
                    <div className="card shadow text-center d-flex">
                        <h3>{i.name}</h3>
                        <Link to={`/Person/${i.id}`} className="align-self-start">
                            <button className="btn btn-info">More Info</button>
                        </Link>
                    </div>
                </div>
            </>
        ));
    }
}

export default PeopleCard;