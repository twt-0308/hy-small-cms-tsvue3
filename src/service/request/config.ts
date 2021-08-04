// 根据环境确定 base_url
let BASE_URL = ''
let BASE_NAME = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_NAME = 'dev'
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_NAME = 'prod'
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
  BASE_NAME = 'test'
}

export { BASE_NAME, BASE_URL, TIME_OUT }
