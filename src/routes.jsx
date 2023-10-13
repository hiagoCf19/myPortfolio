
import Error from "./pages/ERROR/Error"
import Home from "./pages/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { TypingProvider } from "./Context/typingContext"
import { TemaProvider } from "./Context/context"



function RoutesApp() {

  return (
    <>
      <TypingProvider>
        <TemaProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </TemaProvider>
      </TypingProvider>
    </>
  )
}

export default RoutesApp
