import asyncComponent from '@/utils/asyncComponent'

const Index = asyncComponent(() => import(/* webpackChunkName: "index" */"@/pages/index/index"))
const Login = asyncComponent(() => import(/* webpackChunkName: "user.login" */"@/pages/user/login/login"))
const Register = asyncComponent(() => import(/* webpackChunkName: "user.register" */"@/pages/user/register/register"))
const ProductList = asyncComponent(() => import(/* webpackChunkName: "product.list" */"@/pages/product/list/list"))
const ProductDetail = asyncComponent(() => import(/* webpackChunkName: "product.detail" */"@/pages/product/detail/detail"))

/*
    {string}  title 页面标题
    {string}  path 路由地址
    {string}  exact 是否精确匹配路由地址
    {React.Component}  component 页面组件
 */
const routes = [
    {
        title: '首页',
        path: '/',
        exact: true,
        component: Index
    },
    {
        title: '首页',
        path: '/index.html',
        exact: true,
        component: Index
    },
    {
        title: '登陆',
        path: '/user/login.html',
        component: Login
    },
    {
        title: '注册',
        path: '/user/register.html',
        component: Register
    },
    {
        title: '产品列表',
        path: '/product/list.html',
        component: ProductList
    },
    {
        title: '产品详情',
        path: '/product/detail.html',
        component: ProductDetail
    }
]

export default routes
