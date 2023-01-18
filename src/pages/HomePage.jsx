import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="relative mx-4 flex h-screen  flex-col overflow-x-hidden">
      <Header />
      <Banner />
    </div>
  );
}

export default HomePage;
