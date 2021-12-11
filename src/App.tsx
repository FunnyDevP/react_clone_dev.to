import React, { FC } from "react";
import Header from "./component/Header/Header";
import { Home } from "./pages/Home/Home";

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
