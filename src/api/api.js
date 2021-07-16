import * as axios from 'axios'

const getHouses = () => {
     return axios.get('https://api.garantbd.pp.ua/posts')
};

export default getHouses;

