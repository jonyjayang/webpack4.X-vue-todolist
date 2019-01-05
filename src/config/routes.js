

export default[
    {
        path:"/",
        redirect: '/app'
    },
    {
        name:"app",
        props: true,
        // props: (route) => ({ id: route.query.b }),
        component: () => import(/* webpackChunkName: "todo-view" */ '../view/todo/todo.vue'),
        path:"/app",
        
    },
    {
        name:'login',
        path:"/login",
        component: () => import(/* webpackChunkName: "login-view" */ '../view/login/login.vue')
    }
]