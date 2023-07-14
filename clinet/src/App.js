/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import Layout from "./pages/layout";
import IndexPage from "./pages/IndexPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<div>login</div>} />
      </Route>
    </Routes>
  );
}

export default App;
