import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import Privacy from "./components/Priyacy";
import Terms from "./components/Terms";
import Refund from "./components/Refund";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const[userName, setUserName] = useState();

  //authentication logic
  useEffect(()=>{
    //Make an API call and send username and password
    const data = {
      name :"Jay Kumar"
    }
    setUserName(data.name)
    
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedUser : userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/privacy-policy",
        element:<Privacy/>
      },
      {
        path: "/terms-of-service",
        element:<Terms/>
      },
      {
        path:"/refund-policy",
        element:<Refund/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
