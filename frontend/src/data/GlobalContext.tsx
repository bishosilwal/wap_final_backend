import React from "react";

interface Props {
  children?: React.ReactNode;
}

interface DefaultContextType {}

const GlobalContext = React.createContext<DefaultContextType>(
  {} as DefaultContextType
);

export const GlobalContextProvider = ({ children, ...props }: Props) => {
  const data = {
    name: "",
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);

export default GlobalContextProvider;
