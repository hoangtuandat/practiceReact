



import axios from "./customize_axios";

const fetchAllUser =() => {
    return axios.get("/api/users?page=2")
}

export {fetchAllUser};