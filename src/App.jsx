import { Route, Routes } from "react-router-dom";
import "./App.css";
import TweetsPage from "./pages/TweetsPage./TweetsPage";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
