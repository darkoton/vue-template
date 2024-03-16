import axios from "@/axios/base"

export default {
  install: (app: any, options: any) => {

    app.config.globalProperties.$get = (path: string) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.get(`${path}`).then(r => {

        return r
      })
    }

    app.config.globalProperties.$post = (path: string, data: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.post(`${path}`, data).then(r => {

        return r
      })
    }

    app.config.globalProperties.$put = (path: string, data: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.put(`${path}`, data).then(r => {

        return r
      })
    }

    app.config.globalProperties.$delete = (path: string, data: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.delete(`${path}`, data).then(r => {

        return r
      })
    }

    app.provide('axiosOp', options)
  }
}