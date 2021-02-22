//验证使用token
const state = () => ({
    token:''
})

const mutations = {
    setToken(state,token){
        state.token = token
    }
}

export default { state,  mutations }