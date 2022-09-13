import React, { createContext, ReactNode, useState } from 'react';

interface AppContextInterface {
  email: string;
  setEmail: (email: string) => void;
  postalCode: string;
  setPostalCode: (postalCode: string) => void;
}

const initialAppContext: AppContextInterface = {
  email: '',
  setEmail: () => {},
  postalCode: '',
  setPostalCode: () => {},
};

export const SignUpContext =
  createContext<AppContextInterface>(initialAppContext);

export const SignUpContextProvider = (props: { children: ReactNode }) => {
  const [email, setEmail] = useState(initialAppContext.email);
  const [postalCode, setPostalCode] = useState(initialAppContext.postalCode);

  const emailContextValue = React.useMemo(() => ({ email, setEmail }), [email]);
  const postalCodeContextValue = React.useMemo(
    () => ({ postalCode, setPostalCode }),
    [postalCode]
  );

  return (
    <SignUpContext.Provider
      value={{ ...emailContextValue, ...postalCodeContextValue }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};
