import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPost from "./pages/ListPost";
import Presentation from "./pages/Presentation";
import DefaultLayout from "./layouts/DeafaultLayout";
import ListPosts from "./pages/ListPosts";


export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<DefaultLayout />}>
          < Route path="/" element={<HomePage />} />
          <Route path="/listpost" element={<ListPost />} />
          <Route path="/listposts/:id" element={<ListPosts />} /> {/* Aggiunto il percorso dinamico */}
          <Route path="/presentation" element={<Presentation />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}