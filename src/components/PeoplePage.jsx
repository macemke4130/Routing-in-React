import React, { Component } from 'react';
import PeopleCard from './PeopleCard';
import Loading from './Loading';

class PeoplePage extends Component {
    state = {
        peopleList: [],
        hasLoaded: false
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
                    hasLoaded: true
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <>
                    <div className="nav-bump"></div>
                    <div className="row justify-content-center">
                        <PeopleCard peopleList={this.state.peopleList} />
                    </div>
                </>
            )
        } else {
            return (<Loading />)
        }
    }
}

export default PeoplePage;