import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/header_logo.png';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [linkActive, setLinkActive] = useState("");

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const LinkhandleClick = (to) => {
        setLinkActive(to);
    }

    return (
        <header id="header" role='banner'>

            <div className="header_top">
                <div className="header__left">
                    <div className="ham__menu" onClick={toggleMenu}>
                        <span></span>
                    </div>


                    <h1 className="logo">
                        <Link to="/"><img src={logoImg} alt="add logo" /></Link>
                    </h1>

                    <nav className="nav">
                        <ul>
                            <li><Link to="/map" className={linkActive === "/map" ? 'active' : ""} onClick={() => LinkhandleClick("/map")}>ADD MAP</Link></li>
                            <li><Link to="/comm" className={linkActive === "/comm" ? 'active' : ""} onClick={() => LinkhandleClick("/comm")}>ADD COMM</Link></li>
                            <li><Link to="/score" className={linkActive === "/score" ? 'active' : ""} onClick={() => LinkhandleClick("/score")}>ADD SCORE</Link></li>
                            <li><Link to="/mypage" className={linkActive === "/mypage" ? 'active' : ""} onClick={() => LinkhandleClick("/mypage")}>MYPAGE</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="header__right">
                    <Link to="/">홈</Link>
                    <Link to="/login">로그인</Link>
                </div>
            </div>


            <div className={`ham_wrap ${showMenu ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" className='main-link'>ADD MAP</Link>
                        <ul className="submenu">
                            <li><Link to=''>전체 지도</Link></li>
                            <li><Link to=''>학과 정보</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/comm" className='main-link'>ADD COMM</Link>
                        <ul className="submenu">
                            <li><Link to=''>🔥 HOT게시판</Link></li>
                            <li><Link to=''>🥇 입시결과 게시판</Link></li>
                            <li><Link to=''>🎓 대학생 게시판</Link></li>
                            <li><Link to=''>✏ 수험생 게시판</Link></li>
                            <li><Link to=''>😀 일반 게시판</Link></li>
                            <li><Link to=''>👀 홍보 게시판</Link></li>
                            <li><Link to=''>☁ 학부모 게시판</Link></li>
                            <li><Link to=''>👓 교사 게시판</Link></li>
                            <li><Link to=''>📂 정보 게시판</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/score" className='main-link'>ADD SCORE</Link>
                        <ul className="submenu">
                            <li><Link to=''>성적 비교</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/" className='main-link'>MYPAGE</Link>
                        <ul className="submenu">
                            <li><Link to=''>성적 관리</Link></li>
                            <li><Link to=''>나의 활동</Link></li>
                            <li><Link to=''>대학교 인증</Link></li>
                            <li>
                                <Link to=''>포인트</Link>
                                <ul className="sub_submenu">
                                    <li><Link to=''>포인트 관리</Link></li>
                                    <li><Link to=''>광고 걸기</Link></li>
                                </ul>
                            </li>
                            <li><Link to=''>회원 정보 수정</Link></li>
                            <li><Link to=''>목표 대학 관리</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header
