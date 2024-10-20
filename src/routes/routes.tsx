import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import ErrorLayout from "../layout/ErrorLayout";
import AdminLayout from "../layout/admin/AdminLayout";
import UserPostPage from "../pages/UserPostPage";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {path:'users', element:<UsersPage/>},
            {path:'users/:id', element: <UserPostPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>}
        ],
        errorElement: <ErrorLayout/>
    },
    {path:'/admin', element: <AdminLayout/>}

]);
