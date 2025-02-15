import { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const Error = lazy(() => import('./pages/Error'))

function App() {
  return (
    <div className='bg-dark w-full h-full text-light font-modern'>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
