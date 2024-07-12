import React from "react";
import globalReducer from "./GlobalReducer";
import initialData, { AppDataType } from "./InitialData";

interface Props {
  children?: React.ReactNode;
}

interface DefaultDispatchType {}

const GlobalContext = React.createContext<AppDataType>({} as AppDataType);

export const GlobalDispatchContext = React.createContext<Function>(() => {});

export const GlobalContextProvider = ({ children, ...props }: Props) => {
  const [appData, dispatch] = React.useReducer(globalReducer, initialData);

  return (
    <GlobalContext.Provider value={appData}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);

export const useDispatch = () => React.useContext(GlobalDispatchContext);

export default GlobalContextProvider;
