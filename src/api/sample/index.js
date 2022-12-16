import axios from '../service'
import 'url-search-params-polyfill'

export const api = {
  /*
   * 목록
   */
  getList(url, params) {
    return axios.call({
      method: 'get',
      url: url,
      params: params,
    })
  },
  /*
   * 상세
   */
  getUser(url, params) {
    return axios.call({
      method: 'get',
      url: url,
      params: params,
    })
  },
  /*
   * 저장
   */
  saveUser(url, params) {
    return axios.call({
      method: 'post',
      url: url,
      params: params,
    })
  },
  /*
   * 삭제
   */
  deleteUser(url, params) {
    return axios.call({
      method: 'delete',
      url: url,
      params: params,
    })
  },
}