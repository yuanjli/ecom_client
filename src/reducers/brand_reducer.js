import {
    DELETE_BRAND
} from '../actions/types';


export default function(state={},action){
    switch(action.type){
        case DELETE_BRAND:
            return {...state, deleteBrand: action.payload }
        default:
            return state;
    }
}