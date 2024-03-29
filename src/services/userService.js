



import axios from "./customize_axios";

const fetchAllUser =(page) => {
    return axios.get(`/api/users?page=${page}`)
}

const postCreateUser = (name, job) => {
    return axios.post("/api/users", {name, job})
}

export {fetchAllUser, postCreateUser};