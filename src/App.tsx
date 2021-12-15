import React, {FC} from "react";
import Header from "./component/Header/Header";
import { Home } from "./pages/Home/Home";
import {Route,Routes} from "react-router-dom"
import CreatesPost from "./pages/Post/CreatePost/CreatesPost";

const App: FC = () => {
  return (
    <>
      <Header />
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={'/new'} element={<CreatesPost />}/>
        </Routes>
    </>
  );
};

export default App;
