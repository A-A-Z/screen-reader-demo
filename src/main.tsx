import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import { Demo1 } from './views/Demo1.tsx'
import { Final } from './views/Final.tsx'
import './assets/reset.css'
import './assets/app.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo1" element={<Demo1 />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
