import { TypingProvider } from "./Context/typingContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


function RoutesApp() {
  return (
    <>
      <TypingProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </TypingProvider>
    </>
  );
}

export default RoutesApp;
