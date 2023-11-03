import { GlobalStyles } from "./UI/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage/DefaultPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
