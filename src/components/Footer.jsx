import React from 'react';


export default function Footer(){
   return(
     <div>
        <footer>
                <div className="footer_wrap">
                    <div className="top_foot">
                        <div className="left_foot">
                            <div id="foot_logo"><img src='' alt=''></img>GENTLEMOSTER</div>
                            <div className="foot_serch">
                                <input typeof='serch'id='serch_box' />
                                    <label  htmlFor="serch_box"><img src="../img/main/search.png" alt="" /></label>
                                        
                            </div>
            
                        </div>
                        <div className="right_foot">
                            <ul>
                                <li>채용안내
                                    <ul>
                                        <li>채용 소개</li>
                                        <li>채용 지원하기</li>
                                        <li>문의하기</li>
            
                                    </ul>
                                </li>
                                <li>고객서비스
                                    <ul>
                                        <li>문의</li>
                                        <li>배송 </li>
                                        <li>교환 및 환불</li>
                                        <li>수리서비스 가이드</li>
                                        <li>제품 등록 가이드</li>
                                        <li>제품 등록</li>
            
                                    </ul>
                                </li>
                                <li>법적고지
                                    <ul>
                                        <li>이용약관</li>
                                        <li>개인정보처리방침 </li>
                                        <li>쿠키 정책</li>
                                        <li>기프트카드 이용약관</li>
            
                                    </ul>
                                </li>
                                <li>소셜미디어
                                    <ul>
                                        <li>페이스북</li>
                                        <li>인스타그램</li>
                                        <li>유튜브</li>
                                        <li>트위터</li>
                                        <li>카카오톡</li>
                                        <li>핀터레스트</li>
                                        <li>위쳇</li>
                                        <li>웨이브</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom_foot">
                        <div>
                            <div className="copy_left">
                                <p>© 2022 GENTLE MONSTER</p>
                            </div>
                            <div className="copy_mid">
                                <p>주 아이아이컴바인드 | 대표자명: 김한국 | 사업자번호: 119-86-38589 | 통신판매신고번호: 제 2014-서울마포-1050 호 (사업자 정보 확인) | 이메일
                                    문의:
                                    cs@gentlemonster.com <br />개인정보보호책임자: 정태호 | 주소: 서울특별시 마포구 어울마당로5길 41 | 대표번호: 1600-2126<br />
                                    고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을 체결하여 보장해드리고 있습니다. <span>서비스 가입사실 확인</span></p>
                            </div>
            
                        </div>
                        <div className="copy_right">
                            <p>본 사이트는 개인의 포트폴리오 사이트로 제작되어 상업적 목적이 아닙니다.</p>
                        </div>
                    </div>
            
                </div>
            </footer>
    </div>
   );
}