import axios from "@/axios/index"

export default {
  install: (app: any, options: any) => {
    app.config.globalProperties.$axios= {
    get:(path: string) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.get(`${path}`).then(r => {

        return r
      })
    },

    post:(path: string, data: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.post(`${path}`, data).then(r => {

        return r
      })
    },

    put: (path: string, data: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.put(`${path}`, data).then(r => {

        return r
      })
    },

    delete: (path: string, data: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.delete(`${path}`, data).then(r => {

        return r
      })
    }
  }
  }
}