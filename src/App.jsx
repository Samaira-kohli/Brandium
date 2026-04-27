import Loader from "./components/Loader"
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import Services from "./pages/Services";
import ApproachPage from "./pages/ApproachPage";
import ContactPage from "./pages/ContactPage";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>

      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='work' element={<WorkPage />} />
            <Route path='services' element={<Services />} />
            <Route path='approach' element={<ApproachPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Route>
        </Routes>
      )}

    </BrowserRouter>
  );
}

export default App;