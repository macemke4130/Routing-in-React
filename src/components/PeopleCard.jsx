import React, { Component } from 'react';

class PeopleCard extends Component {

    render() {
        return this.props.peopleList.map((i) => (
            <>
                <div className="col-12 col-md-4">
                    <div className="card shadow">
                        <h2>{i.name}</h2>
                        <p>{i.gender}</p>
                    </div>
                </div>
            </>
        ));
    }
}

export default PeopleCard;