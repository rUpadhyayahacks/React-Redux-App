import axios from 'axios';



export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SOCCER = 'UPDATE_SOCCER'

export const getData = () => dispatch => {
    console.log('logging')
    dispatch({ type: FETCH_DATA });
    axios
    .get
    // ('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY')
    ('https://www.scorebat.com/video-api/v1/')
    // ('https://api.kanye.rest/#')
    .then(res => {
        console.log(res)
        dispatch({ type: UPDATE_SOCCER, payload: res.data })
    },[])
    .catch(err => {
        console.log(err)
    })
}