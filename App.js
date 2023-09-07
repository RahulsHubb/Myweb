import React from "react";
import ReactDOM from "react-dom/client"
import Index from ".";
import Header from "./component/Header";
import './css/styles.css'
import ProductBase from "./component/products";
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
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<>
  <Header/>
  <ProductBase/>
  </>);