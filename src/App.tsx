import React, {FC} from "react";
import Header from "./component/Header/Header";
import { Home } from "./pages/Home/Home";
import {Route,Routes} from "react-router-dom"

const App: FC = () => {
  return (
    <>
      <Header />
        <Routes>
            <Route path={"/"} element={<Home />}/>
        </Routes>
    </>
  );
};

export default App;
