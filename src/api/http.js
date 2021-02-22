// 在http.js中引入axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import store from '../store/index';


// 1.环境的切换
// 根据不同的环境进行切换默认url
// if (process.env.NODE_ENV == 'development') { 
//     axios.defaults.baseURL = 'https://www.baidu.com';} 
// else if (process.env.NODE_ENV == 'debug') { 
//     axios.defaults.baseURL = 'https://www.ceshi.com';
// } 
// else if (process.env.NODE_ENV == 'production') { 
//     axios.defaults.baseURL = 'https://www.production.com';
// }

axios.defaults.baseURL = 'http://localhost:3001/';  //默认设置为本地中间接口地址

axios.defaults.timeout = 10000;     //2.通过axios.defaults.timeout设置默认的请求超时时间

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';    //3.设置POST请求头

// 4.请求拦截器axios.interceptors.request
axios.interceptors.request.use( 
    config => { 
    // 每次发送请求之前判断vuex中是否存在token 
        const token = store.state.token.token; 
        token && (config.headers.Authorization = token);  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        return config; 
    }, 
     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    error => { 
        return Promise.error(error); 
    }
)

// 5.响应拦截器axios.interceptors.response(此处可以不做，因为后端的返回体封装在接受的data中，比如账号密码错误，接收到的status照样是正常的）


//6.Get、Post封装
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){ 
    return new Promise((resolve, reject) =>{ 
        axios.get(url, {  
            params: params 
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data) 
        }) 
    });
}



/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}