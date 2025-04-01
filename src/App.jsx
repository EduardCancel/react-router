import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPost from "./pages/ListPost";
import Presentation from "./pages/Presentation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}>
          <Route path="/listpost" Component={ListPost} />
          <Route path="/presentation" Component={Presentation} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}