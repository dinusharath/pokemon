import axios from 'axios';

export const getData = (url: string, params?: object) => {
    return axios.get(url, {
        params: params
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}
