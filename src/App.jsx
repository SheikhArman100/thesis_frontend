/* eslint-disable no-unused-expressions */
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Lazyloading from "./components/Lazyloading";

import UsedCarInput from "./pages/UsedCarInput";

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const HomePage = lazy(() => wait(2000).then(() => import("./pages/HomePage")));
const CarPredict = lazy(() => import("./pages/CarPredict"));

function App() {
  return (
    <BrowserRouter>
      <motion.div key="home">
        <Suspense fallback={<Lazyloading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/usedcar" element={<UsedCarInput />} />
            <Route path="/predictprice" element={<CarPredict />} />
          </Routes>
        </Suspense>
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
