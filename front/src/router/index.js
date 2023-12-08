// import About from "../pages/About";
// import Posts from "../pages/Posts";
// import PostIdPage from "../pages/PostIdPage";
// import Login from "../pages/Login";
import MainPage from "../pages/MainPage"
import StartPage from "../pages/StartPage"

export const privateRoutes = [
    // {path: '/about', component: About, exact: true},
    // {path: '/posts', component: Posts, exact: true},
    // {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/', component: StartPage, exact: true},
    {path: '/main', component: MainPage, exact: true},
]
