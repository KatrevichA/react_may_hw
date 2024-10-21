import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layoust/MainLayout";
import React from "react";
import RecipesPage from "../page/RecipesPage";
import ErrorLayout from "../layoust/ErrorLayout";
import HomePage from "../page/HomePage";

 export const router = createBrowserRouter([
     {path:'/', element: <MainLayout/>,
         children: [
             {index: true, element: <HomePage/>},
             {path:'recipes', element:<RecipesPage/>}
         ],
         errorElement: <ErrorLayout/>
      }

 ]);
