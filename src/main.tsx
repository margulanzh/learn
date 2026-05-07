import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import UseCallbackPage from "./pages/UseCallbackPage.tsx";
import UseMemoPage from "./pages/UseMemoPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/useCallback" element={<UseCallbackPage />} />
      <Route path="/useMemo" element={<UseMemoPage />} />
    </Routes>
  </BrowserRouter>,
);
