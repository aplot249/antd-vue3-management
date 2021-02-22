//保存教师界面顶栏的menu中的selectkey属性
const state = () => ({
    selectedkeys:'1'
})

const mutations = {
    setSelectedkeys(state,selectedkeys){
        //console.log(selectkeys)
        state.selectedkeys = selectedkeys
        console.log(state.selectedkeys)
    }
}

export default { state,  mutations }