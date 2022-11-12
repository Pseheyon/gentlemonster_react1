import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import styled from 'styled-components';
import { Nav, Navbar,Container} from 'react-bootstrap'
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import Main from './pages/Main';
import Sub from './pages/Sub';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Detail01 from './pages/Detail01'
import Detail02 from './pages/Detail02'
import Detail03 from './pages/Detail03'
import Detail04 from './pages/Detail04'
import { Button01,Button02 } from './components/Styled';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">

      

      <Navbar className='header_bg'>

        <Container>

          

          
            <Nav >

            <Nav.Link onClick={() => {navigate('/')}}>TINT SUNGLASSES</Nav.Link>

            <Nav.Link onClick={() => {navigate('/sub/sub01')}}>CATEGORY</Nav.Link>
            

          </Nav>
          <Navbar.Brand onClick={() => {navigate('/')}}><img src='/img/main/logo_header.png' alt=''></img></Navbar.Brand>
          <Nav >

            <Nav.Link >베스트</Nav.Link>

            <Nav.Link >제품 구매하기</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}><img src='/img/main/cart.png' alt=''></img></Nav.Link>

          </Nav>
          
          
        </Container>

      </Navbar>


      {/* <Link to={'/'}>home</Link>

      <Link to={'/best'} target='_blank'>best</Link> */}


       <Routes>

        <Route path='/' element={<Main />} />        

        <Route path='/sub' element={<Sub />}>

          <Route path='sub01' element={<Sub01></Sub01>} />

          <Route path='sub02' element={<Sub02></Sub02>} />

        </Route>

           
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detail01' element={<Detail01/>} />
        <Route path='/detail02' element={<Detail02/>} />
        
        
      </Routes>
      <Footer></Footer>
         

            

    </div>
  )
}

export default App;
