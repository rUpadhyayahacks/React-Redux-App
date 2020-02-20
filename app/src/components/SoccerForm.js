import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions'

const SoccerForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };



return (
    <>
    {props.isFetchingData ? (
        <div>fetching data</div>
    ) : (
        <button onClick={handleGetData}>Soccer Matches</button>
    )}
    </>
);
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
     { getData }
     )(SoccerForm);