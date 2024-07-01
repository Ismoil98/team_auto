import {Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, Blogs, CarsAbout, CarsPage, Contacts, Faq, Terms, Uslugi, UslugiFirst, UslugiSecond, AboutUs} from './pages/index'
import PageFirst from './pages/blogs/BlogInnerPage/PageFirst/PageFirst'
import PageSecond from './pages/blogs/BlogInnerPage/PageSecond/PageSecond'
import PageThird from './pages/blogs/BlogInnerPage/PageThird/PageThird'
import Loader from './components/loader/Loader'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='bg-[#1E1F27]'>
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
          path="/blogs"
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
          path='/uslugi/first'
          element={
            <Suspense fallback={<Loader/>}>
              <UslugiFirst/>
            </Suspense>
          }
          />
          <Route 
          path='/uslugi/second'
          element={
            <Suspense fallback={<Loader/>}>
              <UslugiSecond/>
            </Suspense>
          }
          />
          <Route 
          path='/about'
          element={
            <Suspense fallback={<Loader/>}>
              <AboutUs/>
            </Suspense>
          }
          />
          <Route 
          path='/firstPage'
          element={
            <Suspense fallback={<Loader/>}>
              <PageFirst/>
            </Suspense>
          }
          />
          <Route 
          path='/secondBlogPage'
          element={
            <Suspense fallback={<Loader/>}>
              <PageSecond/>
            </Suspense>
          }
          />
          <Route 
          path='/thirdBlogPage'
          element={
            <Suspense fallback={<Loader/>}>
              <PageThird/>
            </Suspense>
          }
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App