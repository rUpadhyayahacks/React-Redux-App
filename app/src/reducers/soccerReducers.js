import { FETCH_DATA, UPDATE_SOCCER } from '../actions';

const initialState = {
    soccerdata: [],
    isFetchingData: false
};


export const soccerReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                soccerdata: []
            }
            case UPDATE_SOCCER:
                return {
                    ...state,
                    soccerdata: action.payload,
                    isFetchingData: false
                }
        default:
            return state;
    }

}