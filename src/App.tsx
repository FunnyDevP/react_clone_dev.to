import React, {FC, useEffect} from "react";
import Header from "./component/Header/Header";
import { Home } from "./pages/Home/Home";
import axios from 'axios'

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
