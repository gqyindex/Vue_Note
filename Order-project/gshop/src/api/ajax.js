/*
* ajax请求模块
*/
import axios from 'axios'
export default function ajax(url,data={},type='GET') {
      return new Promise(function (resolve,reject) {
        let promise

        if (type === 'GET'){
          let dataStr = '' // 数 据 拼 接 字 符 串
           Object.keys(data).forEach(key => {
             dataStr += key + '=' + data[key] + '&'
           })
          if (dataStr !== '') {
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr
          }
          promise = axios.get(url)
        }else {
          promise = axios.post(url,data)
        }
        promise.then(response => {
          resolve(response.data)
        })
          .catch(error => {
            reject(error)
          })
      })
}
