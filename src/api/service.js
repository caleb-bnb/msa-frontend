import axios from 'axios'
import { SAMPLE_URL } from './config'
import 'url-search-params-polyfill'

/*
 * axios 인스턴스를 생성합니다.
 * 생성할때 사용하는 옵션들 (baseURL, timeout, headers 등)
 * https://github.com/axios/axios 의 Request Config 챕터 확인
*/
const service = axios.create({
  withCredentials: true,
  timeout: 30000,
})

/*
 * 1. 요청 인터셉터를 작성합니다.
 *    - 2개의 콜백 함수를 받습니다.
 *    1) 요청 바로 직전 - 인자값: axios config
 *    2) 요청 에러 - 인자값: error
 */
service.interceptors.request.use(
  function (config) {
      // 요청 바로 직전
      // axios 설정값에 대해 작성합니다.
      config.headers['Access-Control-Allow-Origin'] = '*'
      config.headers['Access-Control-Allow-Methods'] = "GET, PUT, POST, DELETE, OPTIONS, post, get"
      config.headers['Access-Control-Allow-Headers'] = 'X-Requested-With'
      config.headers['Access-Control-Allow-Credentials'] = true

      // header('Access-Control-Allow-Origin: *');
      // header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS, post, get');
      // header("Access-Control-Max-Age", "3600");
      // header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
      // header("Access-Control-Allow-Credentials", "true");

      if('|GET|POST|'.indexOf('|'+ config.method.toUpperCase() +'|') != -1) {
        config.headers['Content-Type'] = 'application/json'
      }

      // config.baseURL = SAMPLE_URL
      console.log('SAMPLE_URL='+ SAMPLE_URL)
      return config;
  }, 
  function (error) {
      // 요청 에러 처리를 작성합니다.
      return Promise.reject(error);
  }
);

/*
 * 2. 응답 인터셉터를 작성합니다.
 *    - 2개의 콜백 함수를 받습니다.
 *    1) 응답 정성 - 인자값: http response
 *    2) 응답 에러 - 인자값: http error
 */
service.interceptors.response.use(
  function (response) {
    /*
        http status가 200인 경우
        응답 바로 직전에 대해 작성합니다. 
        .then() 으로 이어집니다.
    */
    return response;
  },
  function (error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 처리를 작성합니다.
        .catch() 으로 이어집니다.    
    */
    return Promise.reject(error);
  }
);

export default {
  async call(options) {
    try {
      let res

      if(options.method.toUpperCase() == 'GET')
      {
        await service[options.method.toLowerCase()](
          options.url,
          { params: options.params },
          { withCredentials: true },
        ).then((response) => {
          res = response
        })
      }
      else
      {
        await service[options.method.toLowerCase()](
          options.url,
          options.params,
        ).then((response) => {
          res = response
        })
      }

      return res
    } catch (e) {
      return console.log(e)
    }
  }
}
