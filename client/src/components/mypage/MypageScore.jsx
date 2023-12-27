import React from 'react'
import Header from '../layout/Header'
import MypageSide from './MypageSide'
import MypageAll from './MypageAll'
import MypageGrade from './MypageGrade'
import MypageTest from './MypageTest'
import up_score from '../../assets/img/mypage/up_score.png'
import all_score from '../../assets/img/mypage/all_score.png'
import down_score from '../../assets/img/mypage/down_score.png'
import week_score from '../../assets/img/mypage/week_score.png'
import now_score from '../../assets/img/mypage/now_score.png'
import { Line } from "react-chartjs-2";


const mypageScore = ({ chartData }) => {

    return (
        <>
            <Header />
            <div className='mypage_wrap'>
                <MypageSide />

                <div className='main'>
                    <div className='mypage_score'>
                        <div className='mypage_all_score'>
                            <div className='all_score_title'>
                                <h3>전체 평균 등급</h3>
                                <em className='score_level'>5.25</em>
                                <p>등급 상증중! 조금만 더 화이팅! <img src={up_score} /></p>
                            </div>
                            <div className='all_score_icon'>
                                <img src={all_score} />
                            </div>
                        </div>
                        <div className='mypage_grade_score'>
                            <div className='grade_score_title'>
                                <h3>학년 평균 등급</h3>
                                <em className='score_level'>5.25</em>
                                <p>등급 하락중! 다시 힘내봐요. <img src={down_score} /></p>
                            </div>
                            <div className='grade_score_icon'>
                                <img src={week_score} />
                            </div>
                        </div>
                        <div className='mypage_now_score'>
                            <div className='now_score_title'>
                                <h3>현재 등급</h3>
                                <em className='score_level'>5.25</em>
                                <p>최근에 입력한 등급 점수입니다.</p>
                            </div>
                            <div className='now_score_icon'>
                                <img src={now_score} />
                            </div>
                        </div>
                    </div>

                    <div className='mypage_chart'>
                        <div className='mypage_grade'>
                            <h4>전체 학년 평균</h4>
                            <MypageTest />
                        </div>
                        <div className='mypage_grade'>
                            <h4>모의고사 평균</h4>
                            <MypageGrade />
                        </div>
                    </div>

                    <div className="mypage_chart_all">
                        <div className="mypage_all">
                            <h4>전체 평균 등급</h4>
                            <MypageAll />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default mypageScore