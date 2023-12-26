import React from 'react'

const MypageSide = () => {
    return (
        <>
            <div className="nav">
                <h2>MYPAGE</h2>
                <ul>
                    <li className='active'>
                        <a href="/mypage">성적 관리</a>
                    </li>
                    <li>
                        <a href="/">나의 활동</a>
                    </li>
                    <li>
                        <a href="/">대학교 인증</a>
                    </li>
                    <li>
                        <a href="/">포인트</a>
                    </li>
                    <li>
                        <a href="/">회원 정보 수정</a>
                    </li>
                    <li>
                        <a href="/">목표 대학 관리</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MypageSide