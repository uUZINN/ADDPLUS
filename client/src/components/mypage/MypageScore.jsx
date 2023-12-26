import React from 'react'
import Header from '../layout/Header'
import MypageSide from './MypageSide'
import up_score from '../../assets/img/mypage/up_score.png'
import all_score from '../../assets/img/mypage/all_score.png'
import down_score from '../../assets/img/mypage/down_score.png'
import week_score from '../../assets/img/mypage/week_score.png'
import now_score from '../../assets/img/mypage/now_score.png'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

const mypageScore = () => {
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

                    <Line
                        datasetIdKey='id'
                        data={{
                            labels: ['Jun', 'Jul', 'Aug'],
                            datasets: [
                                {
                                    id: 1,
                                    label: '',
                                    data: [5, 6, 7],
                                },
                                {
                                    id: 2,
                                    label: '',
                                    data: [3, 2, 1],
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default mypageScore