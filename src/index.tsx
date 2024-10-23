import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import FormPage from "./page/FormPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {path:'form',element:<FormPage/>}
        ]}
]);
root.render(
<RouterProvider router={router}/>
);

