import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/react'
import DataProvider from './context/DataProvider.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import ScrollToTop from "react-scroll-to-top";
import { Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DataProvider>
        <ClerkProvider>
          <BrowserRouter>
            <App />
            <ScrollToTop smooth color='white' style={{
              backgroundColor: '#fa2d37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} />
            <ToastContainer 
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            />
          </BrowserRouter>
        </ClerkProvider>
      </DataProvider>
    </Provider>
  </StrictMode>,
)
