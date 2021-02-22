const state = () => ({
    tabItem:[
        { tab: '系统主页', key: '1',router:'home' ,closable:false}
    ],
    activeKey:'1'
})

const mutations = {
    addTab(state,tab){
        let newTab={
            tab: tab.tab,
            key:String(Number(state.tabItem[state.tabItem.length-1].key)+1),
            router:tab.router,
            closable:true
        }
        state.activeKey=newTab.key;
        console.log(state.activeKey)
        state.tabItem.push(newTab);
    },
    deleteTab(state,index){
        state.tabItem.splice(index,1);
    },
    setActiveKey(state,key){
        state.activeKey=key;
    }
}

export default { state,  mutations }
