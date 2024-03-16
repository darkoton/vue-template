import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_BACKEND_URL,
  headers: {
    Authorization: `Bearer {token}`
  }
})