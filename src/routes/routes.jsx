


//routes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//pages
import About from '../pages/About';
import Layout from '../layout/DefaultLayout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';



function RouteApp() {
  return (
    <>


      <BrowserRouter>
        <Routes>

          <Route element={<Layout />} >

            <Route path='/' element={<Home />} />
            {/* <Route path='/sobre' element={<About />} /> */}
            <Route path='/sobre' element={<Home />} />
            <Route path='/projetos' element={<Projects />} />
            <Route path='/contatos' element={<Contacts />} />

          </Route>

        </Routes>



      </BrowserRouter>



    </>
  )
}

export default RouteApp
