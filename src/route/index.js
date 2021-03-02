import { createRouter, createWebHashHistory } from 'vue-router' //引入vue-router-4.0

export const constantRoutes = [
    {
        path: '/',
        component: () => import('../pages/login.vue'),
        hidden: true
    },
    {
        path:'/editinfo',
        component: () => import('../pages/teacher/course/mycourse/editinfo.vue'),
    },
    {
        path:'/addlesson',
        component: () => import('../pages/teacher/course/mycourse/addlesson.vue'),
    },
    {
        path: '/teacher',
        component: () => import('../pages/teacher/main.vue'),
        hidden: true,
        children:[
            {
                path:'home',
                component: () => import('../pages/teacher/home.vue'),
            },
            {
                path:'discussion',
                component: () => import('../pages/teacher/discussion.vue'),
            },
            {
                path:'suggestion',
                component: () => import('../pages/teacher/suggestion.vue'),
            },
            {
                path:'course',
                component: () => import('../pages/teacher/course.vue'),
                children:[
                    {
                        path:'mycourse',
                        component: () => import('../pages/teacher/course/mycourse.vue'),
                    },
                    {
                        path:'editinfo/:courseNo',
                        component: () => import('../pages/teacher/course/mycourse/editinfo.vue'),
                        props:true
                    },
                    {
                        path:'addlesson/:courseNo',
                        component: () => import('../pages/teacher/course/mycourse/addlesson.vue'),
                        props:true
                    },
                    {
                        path:'checkorders',
                        component: () => import('../pages/teacher/course/checkorders.vue'),
                    },
                    {
                        path:'orderevaluations',
                        component: () => import('../pages/teacher/course/orderevaluations.vue'),
                    },
                    {
                        path:'coursesuploadhistory',
                        component: () => import('../pages/teacher/course/coursesuploadhistory.vue'),
                    },
                    {
                        path:'uploadcourse',
                        component: () => import('../pages/teacher/course/uploadcourse.vue'),
                    }
                
                ]
            },
        ]
    },
    {
        path: '/manager',
        component: () => import('../pages/manager/main.vue'),
        hidden: true,
        children:[
            {
                path:'home',
                component: () => import('../pages/manager/home.vue'),
            },
            {
                path:'checkuser',
                component: () => import('../pages/manager/checkuser.vue'),
            },
            {
                path:'edituser',
                component: () => import('../pages/manager/edituser.vue'),
            },
            {
                path:'useroperationhistory',
                component: () => import('../pages/manager/useroperationhistory.vue'),
            }
        ]
          
    
    },


]
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
})

export default router