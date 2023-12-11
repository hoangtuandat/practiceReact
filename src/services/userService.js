



import axios from "./customize_axios";

const fetchAllUser =(page) => {
    return axios.get(`/api/users?page=${page}`)
}

export {fetchAllUser};