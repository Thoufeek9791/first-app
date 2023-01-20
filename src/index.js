import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
// import logo from "./logo.svg";
import NavBar from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const header = ReactDOM.createRoot(document.getElementById("root"));

//using jsx
// const content = (
//   <div>
//     <img
//       src={logo}
//       alt="somthing went wrong"
//       width="100px"
//       height="100px"
//     ></img>
//     <h1>Welcome to the React App</h1>
//     <ul>
//       <li>React is User Friendly</li>
//       <li>React is Easy to Learn</li>
//     </ul>
//   </div>
// );
// header.render(content);

//By creating components





function Page() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

header.render(<Page />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
