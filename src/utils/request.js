//对axios封装
import axios from 'axios'
const request =axios.create({
    baseURL: "http://43.142.37.253:8080/",
    timeout: 3000
    // headers: headers
})
export default request 