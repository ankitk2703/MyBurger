import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-project-c4c71.firebaseio.com/'
})

export default instance