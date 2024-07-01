import {Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, Blogs, CarsAbout, CarsPage, Contacts, Faq, Terms, Uslugi} from './pages/index'
import Loader from './components/loader/Loader'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import PageFirst from './pages/blogs/BlogInnerPage/PageFirst/PageFirst'
import PageSecond from './pages/blogs/BlogInnerPage/PageSecond/PageSecond'
import PageThird from './pages/blogs/BlogInnerPage/PageThird/PageThird'

const App = () => {
  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route 
          path='/'
          element={
            <Suspense fallback={<Loader/>}>
              <Home/>
            </Suspense>
          }
          />
          <Route 
          path={`/blogs/:id`}
          element={
            <Suspense fallback={<Loader/>}>
              <Blogs/>
            </Suspense>
          }
          />
          <Route 
          path='/carsabout'
          element={
            <Suspense fallback={<Loader/>}>
              <CarsAbout/>
            </Suspense>
          }
          />
          <Route 
          path='/carspage'
          element={
            <Suspense fallback={<Loader/>}>
              <CarsPage/>
            </Suspense>
          }
          />
          <Route 
          path='/contacts'
          element={
            <Suspense fallback={<Loader/>}>
              <Contacts/>
            </Suspense>
          }
          />
          <Route 
          path='/faq'
          element={
            <Suspense fallback={<Loader/>}>
              <Faq/>
            </Suspense>
          }
          />
          <Route 
          path='/terms'
          element={
            <Suspense fallback={<Loader/>}>
              <Terms/>
            </Suspense>
          }
          />
          <Route 
          path='/uslugi'
          element={
            <Suspense fallback={<Loader/>}>
              <Uslugi/>
            </Suspense>
          }
          />
           <Route
            path='/firstPage'
            element={<PageFirst/>}
          />
          <Route
           path='/secondBlogPage'
           element={<PageSecond/>}
          />
           <Route
           path='/thirdBlogPage'
           element={<PageThird/>}
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App