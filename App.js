import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Index from ".";
import Header from "./src/component/Header";
import "./src/css/styles.css";
import "./index.css"
import ProductBase from "./src/component/productsBase";
import { Provider } from "react-redux";
import store from "./dataStore/configureRedux";
import About from "./src/component/About";
import ErrorPage from "./src/component/ErrorPage";
// import Contact from "./component/Contact"
import Restaurents from "./src/component/Restaurents";
// const runReact = React.createElement(
//     "h1",
//     { id: "Newh1",className: "rahul" },
//     React.createElement(
//         "p",// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//         {id: "innerDiv", className: 'rahul'},
//         "Hello From React"

//     )x
//   );
// const App=()=>{
//     return <Index/>
// }

const Contact = lazy(()=> import("./src/component/Contact") )
const ApplayOut = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApplayOut />,
    children:[{
      path: "/",
      element: 
      <ProductBase />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Suspense fallback={<p>Loading Contact</p>}><Contact/>
        </Suspense>,
    },
    {
      path: "/restaurent/:resId",
      element: <Restaurents/>,
    },],
    errorElement: <ErrorPage/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  </>
);

// import React from "react";

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ReactDOM from "react-dom/client";
// import Header from "./component/Header";
// import { Provider } from "react-redux";

// import store from "./dataStore/configureRedux";
// import "./css/styles.css";
// import ProductBase from "./component/products";
// import About from './component/About';
// import Contact from './component/Contact';
// import NotFound from './component/NotFound';
// const runReact = React.createElement(
//     "h1",
//     { id: "Newh1",className: "rahul" },
//     React.createElement(
//         "p",
//         {id: "innerDiv", className: 'rahul'},
//         "Hello From React"

//     )
//   );
// const App=()=>{
//     return <Index/>
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>

// <Provider store={store}>
{
  /* <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router> */
}
{
  /* <Header/>
    </Provider>
  </>
); */
}

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import store from "./dataStore/configureRedux";
// import "./css/styles.css";
// import ProductBase from "./component/products";
// import About from './component/About';
// import Headers from './component/Header';
// import Contact from './component/Contact';
// import NotFound from './component/NotFound';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Headers} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route component={NotFound} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
