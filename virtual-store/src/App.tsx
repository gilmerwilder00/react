import Home from "./components/Home";
import Details from "./views/Details";
// import Details1 from "./views/Details1";
import Cart from "./views/Cart";
import Offers from "./views/Offers";
import NotFound from "./views/NotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Home/>
//       {/* <Details1/> */}
//       {/* <Details/> */}
//       {/* <Cart/> */}
//     </>
//   );
// }

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
      path:'/offers',
      element: <Offers/>
    },
    {
      path:'/*',
      element: <NotFound/>
    }
  ]);

  return (
    <>
      <RouterProvider router = {browserRouter}/>    
    </>
  );
}

export default App;
