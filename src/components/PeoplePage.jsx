import React, { Component } from 'react';
import PeopleCard from './PeopleCard';

class PeoplePage extends Component {
    state = {
        peopleList: []
    };

    componentDidMount() {
        this.showPeople();
    }

    showPeople = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(returnedPeople => {
                this.setState({
                    peopleList: returnedPeople,
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <>
                <div className="nav-fix"></div>
                <div className="row justify-content-center">
                    <PeopleCard peopleList={this.state.peopleList} />
                </div>
            </>
        )
    }
}

export default PeoplePage;