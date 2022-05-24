import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Blog from '@/pages/blog'
import AdminLayout from '@/layouts/admin'
import Index from '@/pages'

export default [
    {
        path:"/",
        component:Index,
        auth:false, 
    }, 
    {   
        path:"/login",
        component:Login,
        auth:false,        
    },
    {   
        path:"/blog",
        component:Blog,
        auth:true,
        layout: AdminLayout
    },
    {   
        path:"/dashboard",
        component:Dashboard,
        auth:false,
        layout: AdminLayout
    },
]