import axios from 'axios'
import { getCookie } from './helperFunctions'

const apiClient = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
})

apiClient.interceptors.request.use(function (config) {
  config.headers['X-CSRFToken'] = getCookie('teams_csrftoken')
  return config
})

export default apiClient
