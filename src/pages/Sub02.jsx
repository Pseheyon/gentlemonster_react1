import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import {data1} from "../components/data";
import '../components/reset.css';
import '../App.css'
import { Link } from "react-router-dom";
//import Footer from "../components/Footer";

export default function Sub02(){
    return(
        <Container className="sub01">
            
            <div className="big1" width='640px'><img width='640px'src="/img/sub/big01.png" alt="" /></div>
            {
                data1.map((sub1, i)=>{
                    return(
                        <div  className={sub1.class} key={sub1.id}>
                            <Link to='/detail02'><img src={`/img/sub/sub02_${i+1}.png`} alt="" width="100%" height="auto" ></img></Link>
                            <div className="under_txt">
                                <h5>{sub1.title}</h5>
                            <p>{sub1.price}</p>
                            
                            </div>
                        </div>
                    )
                })
            }
            <div className="img_big"><img src="/img/sub/big02_long2.png" alt="" /></div>
        </Container>
    )

}