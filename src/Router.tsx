import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart/index.tsx";
import { Success } from "./pages/Success/index.tsx";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
