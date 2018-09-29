
export default {
    //接口地址
    apiBaseURL: process.env.NODE_ENV === 'production'
        ? 'http://api.abc.com/'
        : ''
}
