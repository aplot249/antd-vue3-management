import { get, post } from './http'

// const login = (formdata) =>{
//     let data = {
//         "userid":formdata.account,
//         "password":formdata.password
//     }
// 	let url = "http://localhost:3001/login"
	
// 	axios.post(url,data)
//     .then(res=>{
//         console.log('res=>',res);
       
//     }).catch(function (error) {
//         console.log('error=>',error);
        
//     });
   
// }
export const login = p => post('login', p);

// export default {
//     login 
// }