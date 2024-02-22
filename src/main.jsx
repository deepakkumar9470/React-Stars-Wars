import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter,createBrowserRouter,Route, RouterProvider,createRoutesFromElements, 
  Routes } from "react-router-dom";
import Home from './components/Home';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

// const router = createBrowserRouter(
//   createRoutesFromElements(
//    <Routes>
//      <Route path="/"  element={<App/>}>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/star/:id" element={<Home/>}/>
//     </Route>
//    </Routes>
//   )
// )



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </QueryClientProvider>
);
