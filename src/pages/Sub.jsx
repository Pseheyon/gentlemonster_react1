import React from "react";
import Sub02 from "./Sub02";
import Sub01 from "./Sub01";
import { Link  } from 'react-router-dom';
import { Route, Routes,   } from 'react-router-dom';
import '../App.css'
import { Button01, Button02 } from "../components/Styled";
import { Container} from 'react-bootstrap'
export default function Sub(){
    
    return(
        <>
        <div className='main_item'>
                    <h1>20202 <strong>NEW</strong> - Pre-Collection</h1>
                    <img src='/img/main/main_item.png' alt=''/>
                    <Link to='/sub/sub01' ><Button01 className='main_btn'>more</Button01></Link>
                    
                    <img className='gif' src='/img/main/symbol_f.gif' alt=''></img>
                    
                </div> 
            <Container className="sub_wrap">
                <Link  to='sub01' ><Button02 className="sub_category"> 틴트선글라스</Button02></Link>
            
                <Link to='sub02' ><Button02 className="sub_category">안경 테</Button02> </Link> 
            </Container>
            
            

             

        <Routes path='/sub' element={<Sub />}>

          <Route path='sub01' element={<Sub01></Sub01>} />

          <Route path='sub02' element={<Sub02></Sub02>} />

        </Routes>

        
        </>
    )

}