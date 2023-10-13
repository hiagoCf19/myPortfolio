import { createContext, useContext, useState } from "react";

const iAtualContext = createContext();
export const useiAtual = () => {
  return useContext(iAtualContext)
};
export const TypingProvider = ({ children }) => {
  const [iAtual, setiAtual] = useState(0);

  return (
    <iAtualContext.Provider value={{ iAtual, setiAtual }}>
      {children}
    </iAtualContext.Provider>
  )
}
export default iAtualContext
