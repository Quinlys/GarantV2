import * as axios from 'axios'

const getHouses = () => {
     return axios.get('http://34.118.102.195/posts')
};

export default getHouses;

