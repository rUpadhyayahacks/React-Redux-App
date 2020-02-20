import React from 'react';
import { connect } from 'react-redux'


const SoccerList = props => {
    // console.log(props)
    
    return (  
        
    <>
    {props.soccerdata.map(soccer => 
        // <video> {soccer.videos[0].embed}</video>
        <div className='matches'>{soccer.title}</div>
        )}
    
    </>
)
}

const mapStateToProps = state => {
    return {
        soccerdata: state.soccerdata
    }
}

export default connect(
    mapStateToProps,
    {}
    )(SoccerList);