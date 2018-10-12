import axios from 'axios';
import {
    DELETE_BRAND
} from './types';

import { USER_SERVER } from '../components/utils/misc';


export function deleteBrand(id){

    const request = axios.delete(`${PRODUCT_SERVER}/brand_by_id/${id}`)
    .then(response=>{
        return response.data[0]
    });

    return {
        type: DELETE_BRAND,
        payload: request
    }

}