import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/react'
import DataProvider from './context/DataProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <ClerkProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    </DataProvider>
  </StrictMode>,
)
