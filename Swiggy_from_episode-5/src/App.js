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
import Cart from "./components/Cart";

// Lazy loading Grocery component
const Grocery = lazy(() => import("./components/Grocery"));

// Constant Header component
const AppHeader = ({ searchText, onSearch }) => (
  <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <Header searchText={searchText} onSearch={onSearch} />
  </div>
);

const AppLayout = () => {
  const [userName, setUserName] = useState();
  const [searchText, setSearchText] = useState("");

  // Simulate fetching user data
  useEffect(() => {
    const data = {
      name: "Jay Kumar",
    };
    setUserName(data.name);
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
        {/* Full-screen layout with flexbox to keep footer at the bottom */}
        <div className="min-h-screen flex flex-col">
          <AppHeader searchText={searchText} onSearch={handleSearch} />
          {/* Add padding-top to account for fixed header */}
          <main className="flex-grow pt-[80px]">
            <Outlet context={{ searchText }} />
          </main>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { 
        path: "/", 
        element: <Body />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          return { searchText: url.searchParams.get("q") || "" };
        }
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/privacy-policy", element: <Privacy /> },
      { path: "/terms-of-service", element: <Terms /> },
      { path: "/refund-policy", element: <Refund /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
