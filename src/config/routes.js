import Todo from '../view/todo/todo.vue';
import Login from '../view/login/login.vue';


export default[
    {
        path:"/",
        redirect: '/app'
    },
    {
        name:"app",
        props:true,
        path:"/app",
        component:Todo
    },
    {
        name:'login',
        path:"/login",
        component:Login
    }
]