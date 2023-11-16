import { GlobalStyles } from "./UI/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage/DefaultPage";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./pages/Products/Products";
import SingUp from "./pages/SingUp/SingUp";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<DefaultPage />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/singup" element={<SingUp />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/account" element={<h1>Minha conta</h1>} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
