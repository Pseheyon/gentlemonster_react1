import React from "react";
import { Container} from 'react-bootstrap'
//import Footer from "../components/Footer";
import '../components/reset.css';
import '../App.css';
import { Button01, Mbox } from "../components/Styled";
import { Link } from "react-router-dom";

export default function Main(){
    return(
        <>
            <div className='main_item'>
                    <h1>20202 <strong>NEW</strong> - Pre-Collection</h1>
                    <img src='/img/main/main_item.png' alt=''/>
                    <Link to='/sub/sub01' ><Button01 className='main_btn'>more</Button01></Link>
                    <img className='gif' src='/img/main/symbol_f.gif' alt=''></img>
                    
                </div>  
        <div className="main_outer main">
            <Container className="main_wrap">
                
                
                    <div className="M_box col-md-6">
                        <Mbox>
                            <h2>PRODUCT</h2>
                        <p className="p_main">새로운 메탈 장식이 프레임에 각인된 2022 PRE-COLLECTION.<br/>
                            젠틀몬스터의 미래적인 세계관을 함축한 기하학적<br/>
                            메탈 장식이 템플에 그려져 다양한 아이덴티티를 만들어봅니다.<br/>
                            고급스러움을 더하는 메탈 디테일이 돋보이는<br/>
                            7개의 다양한 컬렉션 프레임을 만나보세요.</p>
                            <Link to='/sub/sub01'><Button01 className="con_main_btn">more</Button01></Link>
                        </Mbox>
                        </div>
                    <div className="M_box col-md-6 main_01_img">
                        <img src="/img/main/con1.png" alt=""></img>
                    </div>
                
                
                    <div className="M_box col-md-5">
                        <img src="/img/main/con2.png" alt=""></img>
                    </div>
                    <div className="M_box col-md-7">
                        <Mbox>
                            <h2>PRODUCT</h2>
                        <p className="p_main">새로운 메탈 장식이 프레임에 각인된 2022 PRE-COLLECTION.<br/>
                            젠틀몬스터의 미래적인 세계관을 함축한 기하학적<br/>
                            메탈 장식이 템플에 그려져 다양한 아이덴티티를 만들어봅니다.<br/>
                            고급스러움을 더하는 메탈 디테일이 돋보이는<br/>
                            7개의 다양한 컬렉션 프레임을 만나보세요.</p>
                            <Link to='/sub/sub02'> <Button01 className="con_main_btn">more</Button01> </Link>
                        </Mbox>
                    </div>
                
                <section className="product">
                    
                    <div className="product_wrap">
                        <input type="radio" id="sun"checked name="product"/>
                        <input type="radio" id="gla" name="product"/>
                        <div className="label_wrap">
                            <label for="sun" className="sun_cl">틴트 선글라스</label>
                            <label for="gla" className="gla_cl">안경</label>
                        </div>
                        <div className="product_img_wrap">
                            <ul className="sheet_sun">
                                
                                    <li >
                                        <Link to='detail01'><img src="/img/main/sun_01.png" alt="sun"/></Link>
                                        <div className="txt_product ">
                                            <span>론디01</span>
                                            <span>259,000원</span>
                                        </div>
                                    </li>
                                
                                    <li ><Link to='detail01'><img src="/img/main/sun_02.png" alt="sun"/></Link>
                                        <div className="txt_product">
                                            <span>르01</span>
                                            <span>280,000원</span>
                                        </div>
                                    </li>
                                
                                    <li ><Link to='detail01'><img src="/img/main/sun_03.png" alt="sun"/></Link>
                                        <div className="txt_product">
                                            <span>두다02</span>
                                            <span>280,000원</span>
                                        </div>
                                    </li>
                                
                                    <li ><Link to='detail01'><img src="/img/main/sun_04.png" alt="sun"/></Link>
                                        <div className="txt_product">
                                            <span>베02</span>
                                            <span>440,000원</span>
                                        </div>
                                    </li>
                                
                                    <li ><Link to='detail01'><img src="/img/main/sun_05.png" alt="sun"/></Link>
                                        <div className="txt_product">
                                            <span>레인 M01</span>
                                            <span>290,000</span>
                                        </div>
                                    </li>
                                
                                    <li ><Link to='detail01'><img src="/img/main/sun_06.png" alt="sun"/></Link>
                                        <div className="txt_product">
                                            <span>브레이드 M01</span>
                                            <span>430,000원</span>
                                        </div>
                                    </li>
                                
                            </ul>
                        </div>
                        <div className="product_img_wrap02">
                            <ul className="sheet_gla ">
                                
                                    <li ><Link to='detail02'><img src="/img/main/glass_01.jpg" alt="glass"/></Link>
                                        <div className="txt_product">
                                            <span>제니</span>
                                            <span>269,000원</span>
                                        </div>
                                    </li>
                                
                                
                                    <li ><Link to='detail02'><img src="/img/main/glass_02.jpg" alt="glass"/></Link>
                                        <div className="txt_product">
                                            <span>제프 01</span>
                                            <span>260,000원</span>
                                        </div>
                                    </li>
                                
                                
                                    <li><Link to='detail02'><img src="/img/main/glass_03.jpg" alt="glass"/></Link>
                                        <div className="txt_product">
                                            <span>알리오 X GD1</span>
                                            <span>310,000원</span>
                                        </div>
                                    </li>
                                
                                
                                    <li ><Link to='detail02'><img src="/img/main/glass_04.jpg" alt="glass"/></Link>
                                        <div className="txt_product">
                                            <span>에디 01</span>
                                            <span>249,000원</span>
                                        </div>
                                    </li>
                                
                                
                                    <li ><Link to='detail02'><img src="/img/main/glass_05.jpg" alt="glass"/></Link>
                                        <div className="txt_product">
                                            <span>알리오 C1</span>
                                            <span>310,000원</span>
                                        </div>
                                    </li>
                                
                                    <li ><Link to='detail02'><img src="/img/main/glass_06.jpg" alt="glass"/></Link>
                                        <div className="txt_product">
                                            <span>S.O.A M01</span>
                                            <span>360,000원</span>
                                        </div>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Container>
            <div className="banner">
            <div className="banner_wrap">
                <img src="/img/main/bannerFront.png" alt=""/>
                <div>
                    <strong>HAUS SHANGHAI</strong>
                    <p>‘HAUS 0 10 10 10 1’은 젠틀몬스터가 보여줄 새로운 퓨처리테일의 방향성을 의미합니다.</p>
                </div>
            </div>
            </div>
            <Container>
                <section class="youtube">
                    
                    <div class="youtube_wrap">
                        <div class="yotube_video">
                            <iframe width="344" height="628" src="https://www.youtube.com/embed/9bQ0qXBx5II" title="SWIPE COLLECTION" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture mute" allowfullscreen></iframe>
                        </div>
                        <div class="youtube_txt">
                            <h3>[MONCLER + GENTLE MONSTER]</h3>
                            <h5>전세계 다섯 개 도시에서 펼쳐진 몽클레르 지니어스 쇼 중, <br/>유일하게 서울에서 진행된<br/> 몽클레르 지니어스-젠틀몬스터 쇼를 공개합니다.</h5>
                            <div class="youtube_txt_p">
                                <p>Among Moncler Genius shows held in five cities around the world,<br />the Moncler Genius-Gentle Monster <br />show in
                                    Seoul is the only one to be unveiled.</p>
                                <p>YOUTUBE 에서 확인하기 </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
        
        </>
    )

}