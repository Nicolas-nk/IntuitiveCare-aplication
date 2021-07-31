import axios from 'axios';

export default () => axios.create({
    //'baseURL' do back-end -> fará a comunicação do Front com o Back
    baseURL: 'http://localhost:3000/api',
});
