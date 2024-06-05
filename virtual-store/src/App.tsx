import Home from "./components/Home";
import Details from "./views/Details";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import OnSale from "./views/OnSale";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path:'/cart',
      element: <Cart/>
    },
    {
      path:'/details/:id',
      element: <Details/>
    },
    {
      path:'/*',
      element: <NotFound/>
    },
    {
      path:'/onsale',
      element: <OnSale/>
    }
  ]);

  return (
    <>
      <RouterProvider router = {browserRouter}/>    
    </>
  );
}

export default App;
