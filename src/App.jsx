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

import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3600)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loading) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      })
    }
  }, [loading])

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <div id="smooth-wrapper">
          <div id="smooth-content">
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
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;