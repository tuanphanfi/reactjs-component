import React from 'react';
import axios from "axios";

const Api = async (method, url, data = null) => {
    try {
        // const url = id ? endpoint + id : endpoint
        const reponse = await axios(method, url, data);
        return reponse;
    } catch (error) {
        throw new Error;
    }
}


export default Api;