import { createContext, useContext, useState } from "react";

const temaCtx = createContext();
export const useTheme = () => {
  return useContext(temaCtx)
};
export const TemaProvider = ({ children }) => {
  const [themeState, setthemeState] = useState(false);
  return (
    <temaCtx.Provider value={{ themeState, setthemeState }}>
      {children}
    </temaCtx.Provider>
  )
}
export default temaCtx
