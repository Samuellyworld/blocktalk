import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from "./styles/global";
import App from './App.tsx'
import { SocketProvider } from './providers/socketProvider.tsx';
import { store, Persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <GlobalStyle />
        <SocketProvider>
          <App />
        </SocketProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
