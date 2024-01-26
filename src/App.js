import React from "react";
import HeadCards from "./components/HeadCards";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="">
      <Navbar />
      <MainPage />
      <HeadCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
