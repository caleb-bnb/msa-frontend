// 기본 url 정의
const BASE_URL = process.env.VUE_APP_BASE_URL

// 기본 port 정의
const BASE_PORT = {
  sample: process.env.VUE_APP_MEMBER_PORT,
  member: process.env.VUE_APP_MEMBER_PORT,
}

// 모듈별 호출 url 정의
const SAMPLE_URL = BASE_URL +":"+ BASE_PORT['sample']
const MEMBER_URL = BASE_URL +":"+ BASE_PORT['member']

console.log('SAMPLE_URL: '+ SAMPLE_URL)
console.log('MEMBER_URL: '+ MEMBER_URL)

export {
  SAMPLE_URL,
  MEMBER_URL,
}